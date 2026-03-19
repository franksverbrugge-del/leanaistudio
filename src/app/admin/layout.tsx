"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Cases", href: "/admin/cases" },
  { label: "Pagina's", href: "/admin/paginas" },
  { label: "Diensten", href: "/admin/diensten" },
  { label: "Media", href: "/admin/media" },
  { label: "Navigatie", href: "/admin/navigatie" },
  { label: "Team", href: "/admin/team" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session && pathname !== "/admin/login") {
        router.replace("/admin/login");
      } else {
        setAuthenticated(!!session || pathname === "/admin/login");
      }
      setChecking(false);
    });
  }, [pathname, router]);

  // Login page renders without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (checking || !authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-text-muted">Laden...</p>
      </div>
    );
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex w-56 flex-col border-r border-border bg-gray-50/50">
        <div className="border-b border-border px-5 py-4">
          <Link href="/admin" className="text-sm font-bold text-primary">
            Lean AI Studio
          </Link>
          <p className="text-xs text-text-muted">Admin</p>
        </div>

        <nav className="flex-1 space-y-0.5 p-3">
          {navItems.map((item) => {
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-text-muted hover:bg-gray-100 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-3">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-text-muted transition-colors hover:bg-gray-100 hover:text-primary"
          >
            Uitloggen
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
