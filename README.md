<div align="center">
  <img src="./public/logos/devi-normal-border.png" width="120" alt="DevTalles" />

  <h1>Code Quest 25</h1>

  <p>DevTalles Community Blog</p>
  <a href="https://" target="_blank">Live Preview</a>
  <span>&nbsp;•&nbsp;</span>
  <a href="#getting-started">Getting Started</a>
</div>

<div align="center">
  <img alt="Astro Badge" src="https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=fff&style=flat" />
  <img alt="Tailwind CSS Badge" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" />
  <img alt="TypeScript Badge" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat" />
  <img alt="PostgreSQL Badge" src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat" />
  <img alt="Better Auth Badge" src="https://img.shields.io/badge/Better%20Auth-24292F?logo=auth0&logoColor=fff&style=flat" />
  <img alt="Bun Badge" src="https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=fff&style=flat" />
  <img alt="Prisma Badge" src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=flat" />
</div>

# 📝 Overview

## Features

- 🛒 Full-featured blog
- 🔒 Secure authentication and user management
- ⚡ Fast, responsive UI with Tailwind CSS

# 🛠️ Tech Stack

- [**Astro**](https://astro.build/) - Modern static site generator for faster websites.
- [**TypeScript**](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [**PostgreSQL**](https://www.postgresql.org/) - Systems of manager for object-relational database.
- [**Tailwind**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- **Prisma** – Modern ORM for type-safe database access
- **Better Auth** – Secure authentication and user management
- **Bun** – Fast JavaScript runtime and package manager
- [**Tabler Icons**](https://tabler.io/) - A collection of icons used.

# 🎨 Live Preview

Curious? Explore the live site:

# 🚀 Getting Started

Set up the project locally in a few simple steps:

### 1. Clone the repository

```bash
git clone https://github.com/angelcruz07/CodeQuest2025.git

cd CodeQuest2025
```

### 2. Install dependencies

> _We use [bun](https://bun.sh) for blazing-fast installs._

```bash
bun install
```

### 3. Configure environment variables

Copy the template and fill in your secrets:

```bash
cp .env.template .env
```

### 4. Start the database

> _Docker is required for local database setup._

```bash
docker compose up -d
```

### 5. Run database migrations

```bash
bunx prisma migrate dev
```

### 6. Seed the database

```bash
bun run seed
```

### 7. Start the development server

```bash
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000/) to see DevBlog in action.

### 8. Set up admin access

To access the dashboard and admin features:

1. **Create a user account** by registering through the application
2. **Ensure Docker container is running** (from step 4)
3. **Connect to the database** using a database client like:
   - [TablePlus](https://tableplus.com/)
   - [DBeaver](https://dbeaver.io/)
   - [pgAdmin](https://www.pgadmin.org/)
   - Or any PostgreSQL client of your choice

4. **Update user role**:
   - Connect to your PostgreSQL database
   - Navigate to the `User` table
   - Find your user record
   - Change the `role` field from `user` to `admin`
   - Save the changes

5. **Refresh the application** and log in to access admin features

Happy coding! 🚀

## Contributors

- [Angel - Frontend](https://github.com/angelcruz07)
- [Lizandro - Backend](https://github.com/LizandroBackEnd)
- [Ezequiel - Backend](https://github.com/erzequielastrada)
- [Arif - Frontend](https://github.com/Ariff-dev)
