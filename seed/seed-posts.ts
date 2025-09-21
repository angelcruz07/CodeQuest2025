import { categories as categorySeed } from "./seed-categories.ts";
import { users as userSeed } from "./seed-users.ts";

interface Post {
  title: string;
  description: string;
  content: string;
  image: string;
  tags: string[];
  slug: string;
  categories: string[];
  userId: string;
}

const categoryNames = categorySeed.map((c) => c.name);
const userIds = userSeed.map((u) => u.id);

export const posts: Post[] = [
  {
    title: "Introducción a React para Frontend",
    description:
      "Aprende los conceptos básicos de React y cómo crear interfaces modernas.",
    content:
      "React es una biblioteca de JavaScript para construir interfaces de usuario...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["react", "frontend", "javascript"],
    slug: "introduccion-a-react-frontend",
    categories: [categoryNames[0], categoryNames[12]],
    userId: userIds[0],
  },
  {
    title: "Construyendo APIs REST con Node.js",
    description:
      "Guía paso a paso para crear APIs robustas usando Node.js y Express.",
    content: "Node.js permite crear servidores eficientes y escalables...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["nodejs", "backend", "api"],
    slug: "construyendo-apis-rest-nodejs",
    categories: [categoryNames[1], categoryNames[20]],
    userId: userIds[1],
  },
  {
    title: "Primeros pasos en Data Science con Python",
    description:
      "Descubre cómo empezar en el mundo de la ciencia de datos usando Python.",
    content:
      "La ciencia de datos combina estadística, programación y conocimiento del dominio...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["python", "data-science", "analisis"],
    slug: "primeros-pasos-data-science-python",
    categories: [categoryNames[4], categoryNames[19]],
    userId: userIds[2],
  },
  {
    title: "Automatización de despliegues con Docker y DevOps",
    description:
      "Implementa pipelines de CI/CD usando Docker y prácticas DevOps.",
    content: "La automatización es clave para el desarrollo moderno...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["docker", "devops", "ci/cd"],
    slug: "automatizacion-despliegues-docker-devops",
    categories: [categoryNames[3], categoryNames[10]],
    userId: userIds[3],
  },
  {
    title: "Diseño de Arquitecturas de Microservicios",
    description:
      "Principios y patrones para diseñar sistemas basados en microservicios.",
    content:
      "Los microservicios permiten escalar y mantener aplicaciones complejas...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["arquitectura", "microservicios", "backend"],
    slug: "diseno-arquitecturas-microservicios",
    categories: [categoryNames[20], categoryNames[6]],
    userId: userIds[4],
  },
  {
    title: "Introducción a TypeScript",
    description:
      "Aprende los fundamentos de TypeScript y cómo tipar tu código JavaScript.",
    content:
      "TypeScript añade tipado estático a JavaScript, mejorando la mantenibilidad...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["typescript", "javascript", "tipado"],
    slug: "introduccion-a-typescript",
    categories: [categoryNames[2], categoryNames[5]],
    userId: userIds[0],
  },
  {
    title: "Desarrollo Web con Astro",
    description:
      "Crea sitios rápidos y modernos usando Astro y componentes de UI.",
    content:
      "Astro es un framework para construir sitios web rápidos y optimizados...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["astro", "web", "ssg"],
    slug: "desarrollo-web-con-astro",
    categories: [categoryNames[0], categoryNames[7]],
    userId: userIds[1],
  },
  {
    title: "Fundamentos de Git y GitHub",
    description: "Controla versiones y colabora usando Git y GitHub.",
    content:
      "Git es el sistema de control de versiones más usado en la industria...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["git", "github", "control de versiones"],
    slug: "fundamentos-git-github",
    categories: [categoryNames[8], categoryNames[0]],
    userId: userIds[2],
  },
  {
    title: "Testing de Aplicaciones Frontend",
    description: "Aprende a testear tus componentes y vistas en React y Vue.",
    content: "El testing es esencial para asegurar la calidad del software...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["testing", "frontend", "react", "vue"],
    slug: "testing-aplicaciones-frontend",
    categories: [categoryNames[0], categoryNames[9]],
    userId: userIds[3],
  },
  {
    title: "Introducción a GraphQL",
    description: "Descubre cómo usar GraphQL para APIs flexibles y eficientes.",
    content:
      "GraphQL es un lenguaje de consulta para APIs desarrollado por Facebook...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["graphql", "api", "backend"],
    slug: "introduccion-a-graphql",
    categories: [categoryNames[1], categoryNames[11]],
    userId: userIds[4],
  },
  {
    title: "CSS Moderno con Tailwind",
    description:
      "Utiliza utilidades de Tailwind CSS para crear interfaces atractivas.",
    content:
      "Tailwind CSS es un framework de utilidades para construir interfaces rápidamente...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["css", "tailwind", "frontend"],
    slug: "css-moderno-tailwind",
    categories: [categoryNames[0], categoryNames[13]],
    userId: userIds[0],
  },
  {
    title: "APIs REST vs GraphQL",
    description: "Comparación entre APIs REST tradicionales y GraphQL.",
    content: "REST y GraphQL son dos enfoques populares para construir APIs...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["api", "rest", "graphql"],
    slug: "apis-rest-vs-graphql",
    categories: [categoryNames[1], categoryNames[11]],
    userId: userIds[1],
  },
  {
    title: "Introducción a Next.js",
    description: "Crea aplicaciones React con SSR y SSG usando Next.js.",
    content:
      "Next.js es un framework para React que permite renderizado del lado del servidor...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["nextjs", "react", "ssr"],
    slug: "introduccion-a-nextjs",
    categories: [categoryNames[0], categoryNames[7]],
    userId: userIds[2],
  },
  {
    title: "Patrones de Arquitectura Frontend",
    description: "Explora patrones comunes para organizar proyectos frontend.",
    content:
      "Los patrones de arquitectura ayudan a mantener el código escalable...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["arquitectura", "frontend", "patrones"],
    slug: "patrones-arquitectura-frontend",
    categories: [categoryNames[0], categoryNames[6]],
    userId: userIds[3],
  },
  {
    title: "Automatización con GitHub Actions",
    description: "Configura flujos de CI/CD usando GitHub Actions.",
    content:
      "GitHub Actions permite automatizar tareas de desarrollo y despliegue...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["github", "ci/cd", "automatizacion"],
    slug: "automatizacion-github-actions",
    categories: [categoryNames[8], categoryNames[10]],
    userId: userIds[4],
  },
  {
    title: "Introducción a Prisma ORM",
    description: "Gestiona tu base de datos en Node.js con Prisma ORM.",
    content: "Prisma es un ORM moderno para Node.js y TypeScript...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["prisma", "orm", "nodejs"],
    slug: "introduccion-a-prisma-orm",
    categories: [categoryNames[1], categoryNames[12]],
    userId: userIds[0],
  },
  {
    title: "Despliegue en Vercel y Netlify",
    description:
      "Publica tus proyectos JAMstack en Vercel y Netlify fácilmente.",
    content:
      "Vercel y Netlify son plataformas populares para desplegar sitios modernos...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["vercel", "netlify", "deploy"],
    slug: "despliegue-vercel-netlify",
    categories: [categoryNames[7], categoryNames[10]],
    userId: userIds[1],
  },
  {
    title: "Scraping Web con Python",
    description:
      "Extrae datos de la web usando librerías de scraping en Python.",
    content:
      "El scraping permite recolectar información de páginas web automáticamente...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["python", "scraping", "web"],
    slug: "scraping-web-python",
    categories: [categoryNames[4], categoryNames[19]],
    userId: userIds[2],
  },
  {
    title: "Introducción a Docker Compose",
    description: "Orquesta múltiples contenedores con Docker Compose.",
    content:
      "Docker Compose facilita la gestión de entornos multi-contenedor...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["docker", "compose", "devops"],
    slug: "introduccion-docker-compose",
    categories: [categoryNames[3], categoryNames[10]],
    userId: userIds[3],
  },
  {
    title: "Optimización de Imágenes para Web",
    description: "Mejora el rendimiento de tu sitio optimizando imágenes.",
    content:
      "La optimización de imágenes es clave para la velocidad de carga...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["imagenes", "web", "performance"],
    slug: "optimizacion-imagenes-web",
    categories: [categoryNames[7], categoryNames[13]],
    userId: userIds[4],
  },
  {
    title: "Introducción a Svelte",
    description:
      "Descubre el framework Svelte para construir interfaces reactivas.",
    content:
      "Svelte es un framework moderno que compila componentes a JavaScript eficiente...",
    image:
      "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["svelte", "frontend", "javascript"],
    slug: "introduccion-a-svelte",
    categories: [categoryNames[0], categoryNames[7]],
    userId: userIds[0],
  },
];
