import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@components/forms/Input";
import { actions } from "astro:actions";

interface PostFormData {
  id?: string;
  title: string;
  content: string;
  image?: string;
  tags: string;
  slug: string;
  categories: string;
}

export default function PostForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PostFormData>();

  const onSubmit: SubmitHandler<PostFormData> = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);

    if (data.image) {
      formData.append("image", data.image);
    }

    formData.append("tags", data.tags);
    formData.append("slug", data.slug);
    formData.append("categories", data.categories);

    const newPost = await actions.post.createUpdatePost(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="title" label="Ingresa un titulo" register={register} />
      <Input
        name="content"
        label="Ingresa una descripcion"
        register={register}
      />
      <Input name="image" label="Ingresa una imagen" register={register} />
      <Input
        name="categories"
        label="Ingresa una categoria"
        register={register}
      />
      <Input name="tags" label="Ingresa un tag" register={register} />
      <Input name="slug" label="Ingresa un slug" register={register} />
      <button type="submit">Submit</button>
    </form>
  );
}
