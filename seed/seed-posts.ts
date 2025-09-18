import { categories as categorySeed } from './seed-categories.ts'; 
import { authors as authorSeed } from './seed-authors.ts';

interface Post { 
  title: string; 
  description: string; 
  content: string; 
  image: string[]; 
  tags: string[];
  slug: string; 
  categories: string[];
  authorId: string;
}

const categoryNames = categorySeed.map(c => c.name);
const authorIds = authorSeed.map(a => a.id);

export const posts: Post[] = [
  {
    title: "Introducción a React para Frontend",
    description: "Aprende los conceptos básicos de React y cómo crear interfaces modernas.",
    content: "React es una biblioteca de JavaScript para construir interfaces de usuario...",
    image: ["https://goo.su/Gq3LY"],
    tags: ["react", "frontend", "javascript"],
    slug: "introduccion-a-react-frontend",
    categories: [categoryNames[0], categoryNames[12]],
    authorId: authorIds[0],
  },
  {
    title: "Construyendo APIs REST con Node.js",
    description: "Guía paso a paso para crear APIs robustas usando Node.js y Express.",
    content: "Node.js permite crear servidores eficientes y escalables...",
    image: ["https://goo.su/Gq3LY"],
    tags: ["nodejs", "backend", "api"],
    slug: "construyendo-apis-rest-nodejs",
    categories: [categoryNames[1], categoryNames[20]],
    authorId: authorIds[1],
  },
  {
    title: "Primeros pasos en Data Science con Python",
    description: "Descubre cómo empezar en el mundo de la ciencia de datos usando Python.",
    content: "La ciencia de datos combina estadística, programación y conocimiento del dominio...",
    image: ["https://goo.su/Gq3LY"],
    tags: ["python", "data-science", "analisis"],
    slug: "primeros-pasos-data-science-python",
    categories: [categoryNames[4], categoryNames[19]],
    authorId: authorIds[2],
  },
  {
    title: "Automatización de despliegues con Docker y DevOps",
    description: "Implementa pipelines de CI/CD usando Docker y prácticas DevOps.",
    content: "La automatización es clave para el desarrollo moderno...",
    image: ["https://goo.su/Gq3LY"],
    tags: ["docker", "devops", "ci/cd"],
    slug: "automatizacion-despliegues-docker-devops",
    categories: [categoryNames[3], categoryNames[10]],
    authorId: authorIds[3],
  },
  {
    title: "Diseño de Arquitecturas de Microservicios",
    description: "Principios y patrones para diseñar sistemas basados en microservicios.",
    content: "Los microservicios permiten escalar y mantener aplicaciones complejas...",
    image: ["https://goo.su/Gq3LY"],
    tags: ["arquitectura", "microservicios", "backend"],
    slug: "diseno-arquitecturas-microservicios",
    categories: [categoryNames[20], categoryNames[6]],
    authorId: authorIds[4]
  }
];
