// import { User, Tag, Calendar, Eye, MessageSquare } from "lucide-react";
import { type Post } from "@interfaces";
import { dateFormat } from "@lib/date-format";

interface PropsBadge {
  className: string;
  children: React.ReactNode;
  variant: string;
}

interface Props {
  post: Post;
}

const Badge = ({ children, variant, className }: PropsBadge) => {
  let baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  let variantClasses = "";

  switch (variant) {
    case "outline":
      variantClasses = "border-primary text-primary";
      break;
    default:
      variantClasses = "bg-neutral text-primary-foreground";
      break;
  }
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};

export const PostView = ({ post }: Props) => {
  return (
    <div className="bg-card border-secondary rounded-xl border shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="p-6">
        <div className="flex gap-4">
          {post.image && (
            <div className="flex-shrink-0">
              <img
                src={
                  post.image ||
                  "https://placehold.co/96x96/e2e8f0/1a202c?text=Image"
                }
                alt={post.title}
                className="h-24 w-24 rounded-lg object-cover"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="truncate text-lg font-semibold text-white">
                    {post.title}
                  </h3>
                  {/* {post.featured && (
                    <Badge
                      variant="outline"
                      className="border-indigo-600 text-indigo-600"
                    >
                      Destacado
                    </Badge>
                  )} */}
                </div>
                <p className="mb-3 line-clamp-2 text-sm text-gray-500">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    {/* <User class="h-3 w-3" /> */}
                    {post.author.name}
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Tag className="h-3 w-3" /> */}
                    {/* {post.categories.map((category, index) => (
                      <span key={index}>{category}</span>
                    ))} */}
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Calendar className="h-3 w-3" /> */}
                    {dateFormat(post.createdAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Eye className="h-3 w-3" /> */}
                    {/* {post.views.toLocaleString()} vistas */}
                  </div>
                  {/* {post.comments > 0 && (
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {post.comments} comentarios
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
