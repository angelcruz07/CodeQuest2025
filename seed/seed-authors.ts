interface Author { 
    id: string;
    name: string;
    email: string; 
    password: string;
    role: 'admin' | 'author' | 'user';
}

export const authors: Author[] = [
    {
        id: "1",
        name: "Ana Martínez",
        email: "ana.martinez@example.com",
        password: "password123",
        role: "admin"
    },
    {
        id: "2",
        name: "Carlos López",
        email: "carlos.lopez@example.com",
        password: "password123",
        role: "author"
    },
    {
        id: "3",
        name: "Lucía Gómez",
        email: "lucia.gomez@example.com",
        password: "password123",
        role: "user"
    },
    {
        id: "4",
        name: "Miguel Torres",
        email: "miguel.torres@example.com",
        password: "password123",
        role: "author"
    },
    {
        id: "5",
        name: "Sofía Ramírez",
        email: "sofia.ramirez@example.com",
        password: "password123",
        role: "user"
    }
];