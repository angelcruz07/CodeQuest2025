import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@components/forms/Input";
import { actions } from "astro:actions";
import clsx from "clsx";
import { type Post, type Category } from "@interfaces";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface PostFormData {
  id?: string;
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
  tags?: string[];
  categories: string[];
  userId: string;
}

interface Props {
  post?: Post;
  categories: Category[];
  userId: string;
}

export default function PostForm({ categories, post, userId }: Props) {
  const [content, setContent] = useState(post?.content || "");

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<PostFormData>({
    defaultValues: {
      ...post,
      categories: post?.categories.map((cat) => cat.id) || [],
    },
  });

  watch("categories");

  const onCategoryChange = (category: Category) => {
    const categories = new Set(getValues("categories"));
    categories.has(category.id)
      ? categories.delete(category.id)
      : categories.add(category.id);
    setValue("categories", Array.from(categories));
  };

  const onSubmit: SubmitHandler<PostFormData> = async (data) => {
    data.content = content;
    data.userId = userId;

    const formData = new FormData();

    if (data.id) {
      formData.append("id", data.id);
    }

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("tags", data.tags);

    data.categories.forEach((categoryId) => {
      formData.append("categories", categoryId);
    });

    console.log(formData);

    const { error } = await actions.post.createUpdatePost(formData);

    if (!error) {
      alert("Post guardado con éxito!");
      window.location.replace("/dashboard/posts");
    }
  };

  const onClickDelete = async (url: string) => {
    const { error } = await actions.images.deleteCloudinaryImage({ url });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-4xl flex-col gap-y-5"
      >
        <Input name="title" label="Titulo del post" register={register} />

        <Input
          name="description"
          label="Descripción del post"
          register={register}
        />

        <MDEditor
          value={content}
          style={{ minHeight: 500, backgroundColor: "#130c25" }}
          onChange={(value) => setContent(value || "")}
          textareaProps={{
            placeholder: "Utiliza formato markdown",
          }}
        />

        <Input
          name="tags"
          label="Ingresa los tags (separados por una coma)"
          register={register}
        />

        <Input
          label="Cargar imagen"
          name="image"
          type="file"
          register={register}
        />

        {post?.image ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div key={post.image}>
              <img
                alt={post.title ?? ""}
                src={post.image}
                width={600}
                height={300}
                className="w-full rounded-t-xl shadow-md"
              />
              <button
                onClick={() => onClickDelete(post.image)}
                type="button"
                className="w-full cursor-pointer rounded-b-xl bg-red-500 text-white"
              >
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <p>No hay imagen disponible</p>
        )}

        <div className="flex flex-col">
          <span>Categorias</span>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => onCategoryChange(category)}
                className={clsx(
                  "mr-2 cursor-pointer rounded-md border p-2 text-center transition-all",
                  {
                    "bg-secondary text-white": getValues("categories").includes(
                      category.id,
                    ),
                  },
                )}
              >
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-secondary cursor-pointer rounded-md p-5"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </section>
  );
}
