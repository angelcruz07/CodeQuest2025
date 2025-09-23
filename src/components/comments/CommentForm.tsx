import { Input } from "../forms/Input";
import { useForm } from "react-hook-form";
import { actions } from "astro:actions";

interface CommentFormProps {
  comment: string;
}

interface Props {
  postId: string;
  userId: string;
  parentId?: string;
  replies?: string;
}

export const CommentForm = ({ postId, userId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("content", data.comment);
    formData.append("userId", userId);
    formData.append("postId", postId);

    console.log("Data del comentario: ", formData);

    const newComment = await actions.comment.createUpdateComment(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-5">
      <Input name="content" register={register} />
      <button type="submit" className="bg-secondary w-full rounded-md">
        Enviar
      </button>
    </form>
  );
};
