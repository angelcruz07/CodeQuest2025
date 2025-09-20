import { User, Tag, Calendar, Eye, MessageSquare } from "lucide-react";

const Badge = ({ children, variant, className }) => {
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

// Interface for the post data
interface PostProps {
  id: string;
  title: string;
  image: string;
  featured: boolean;
  excerpt: string;
  author: string;
  category: string;
  publishDate: string;
  views: number;
  comments: number;
}

// The fixed PostView component
export const PostView = ({ post }: { post: PostProps }) => {
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
                  {post.featured && (
                    <Badge
                      variant="outline"
                      className="border-indigo-600 text-indigo-600"
                    >
                      Destacado
                    </Badge>
                  )}
                </div>
                <p className="mb-3 line-clamp-2 text-sm text-gray-500">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {post.views.toLocaleString()} vistas
                  </div>
                  {post.comments > 0 && (
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {post.comments} comentarios
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App component to render the PostView with sample data
const App = () => {
  const samplePosts = [
    {
      id: "1",
      title: "Creando una app con IA",
      image:
        "https://images.unsplash.com/photo-1620712948622-fbf38171618a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      excerpt:
        "En este post, exploramos el desarrollo de aplicaciones que integran capacidades de inteligencia artificial para resolver problemas complejos y mejorar la experiencia del usuario.",
      author: "Carlos Rivera",
      category: "Tecnología",
      publishDate: "2023-10-27T10:00:00Z",
      views: 12500,
      comments: 75,
    },
    {
      id: "2",
      title: "Introducción a React Hooks",
      image: "",
      featured: false,
      excerpt:
        "Una guía completa para entender y utilizar los hooks de React como useState y useEffect para manejar el estado y los efectos secundarios en tus componentes.",
      author: "Ana García",
      category: "Desarrollo Web",
      publishDate: "2023-10-25T15:30:00Z",
      views: 8500,
      comments: 42,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-full space-y-4">
        {samplePosts.map((post) => (
          <PostView key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
