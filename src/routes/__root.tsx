import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { LanguageProvider } from "../lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <p className="mt-4 text-white/70">This page could not be found.</p>
        <a href="/" className="mt-8 inline-block border border-gold text-gold px-6 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-navy-deep transition">Return Home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 border border-gold text-gold px-6 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-navy-deep transition">
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AMGC — Abdoulwahab Mahamoud Group of Companies" },
      { name: "description", content: "AMGC is a diversified African business group in trade, logistics, manufacturing, agriculture, mining, and construction — connecting Africa with global markets." },
      { property: "og:title", content: "AMGC — Building Africa's Future Through Trade, Industry & Innovation" },
      { property: "og:description", content: "A diversified business group connecting Africa with global markets through professional services, international trade, logistics, and strategic investment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {!isAdmin && <Header />}
        <main>
          <Outlet />
        </main>
        {!isAdmin && <Footer />}
      </LanguageProvider>
    </QueryClientProvider>
  );
}
