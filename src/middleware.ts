import { auth } from "@lib/auth/auth";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/dashboard"];

const noAuthenticatedRoutes = ["/auth/sign-in"];

/**
 * Astro middleware to handle route access based on authentication status.
 *
 * - Redirects unauthenticated users from private routes to /signin.
 * - Redirects authenticated users from no-auth routes to /dashboard.
 * - Attaches user info and login status to locals for downstream use.
 */
export const onRequest = defineMiddleware(
  async ({ url, locals, request, redirect }, next) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    const isAuthed = !!session;
    const user = session?.user ?? null;

    locals.isAuthed = isAuthed;
    locals.user = null;

    console.log(user);

    if (user) {
      locals.user = {
        email: user.email!,
        name: user.name ?? "",
      };
    }

    if (!isAuthed && privateRoutes.includes(url.pathname)) {
      return redirect("/auth/sign-in");
    }

    if (isAuthed && noAuthenticatedRoutes.includes(url.pathname)) {
      return redirect("/dashboard");
    }

    return next();
  },
);
