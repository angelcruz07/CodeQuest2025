/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

interface User {
  name: string;
  image: string | null;
  email: string;
  role: string;
}

declare namespace App {
  interface Locals {
    user: User | null;
    //user: import("better-auth").User
    session: import("better-auth").Session | null;
    isAuthed: boolean;
  }
}
