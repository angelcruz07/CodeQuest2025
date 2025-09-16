import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient({
  baseURL: "http://localhost:4321",
});

export const { signIn, signOut } = authClient;
