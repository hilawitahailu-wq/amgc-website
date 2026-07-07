import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  LayoutDashboard, Newspaper, Briefcase, Users2, Building2, MapPin, BarChart3,
  Handshake, Download, GraduationCap, Search, Languages, UserCog, User, Settings,
  LogOut, Menu, X, Bell, Sun, Moon, ChevronDown,
} from "lucide-react";
import { useAdminAuth } from "@/lib/admin/auth";
import { toast } from "sonner";

const menu = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/news", label: "News", icon: Newspaper },
  { to: "/admin/projects", label: "Projects", icon: Briefcase },
  { to: "/admin/leadership", label: "Leadership", icon: Users2 },
  { to: "/admin/divisions", label: "Business Divisions", icon: Building2 },
  { to: "/admin/offices", label: "Office Locations", icon: MapPin },
  { to: "/admin/statistics", label: "Statistics", icon: BarChart3 },
  { to: "/admin/partners", label: "Partner Profiles", icon: Handshake },
  { to: "/admin/downloads", label: "Downloads", icon: Download },
  { to: "/admin/careers", label: "Careers", icon: GraduationCap },
  { to: "/admin/seo", label: "SEO Settings", icon: Search },
  { to: "/admin/languages", label: "Languages", icon: Languages },
  { to: "/admin/users", label: "Users", icon: UserCog },
  { to: "/admin/profile", label: "Profile", icon: User },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { user, logout } = useAdminAuth();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("admin_theme") === "dark";
    setDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("admin_theme", next ? "dark" : "light");
  };

  const doLogout = () => {
    logout();
    toast.success("Signed out");
    navigate({ to: "/admin/login" });
  };

  const active = (to: string) => pathname === to;
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-navy-deep text-white transform transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <Link to="/admin/dashboard" className="font-display text-xl text-gold tracking-widest">AMGC</Link>
          <button onClick={() => setOpen(false)} className="lg:hidden text-white/70"><X className="h-5 w-5" /></button>
        </div>
        <nav className="p-3 space-y-0.5 overflow-y-auto h-[calc(100vh-4rem)]">
          {menu.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.to}
                to={m.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition ${
                  active(m.to)
                    ? "bg-gold text-navy-deep font-medium"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{m.label}</span>
              </Link>
            );
          })}
          <button
            onClick={doLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-white/70 hover:bg-white/5 hover:text-white mt-2"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </nav>
      </aside>

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/50 lg:hidden" />}

      {/* Content */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 px-4 sm:px-6">
          <button onClick={() => setOpen(true)} className="lg:hidden"><Menu className="h-5 w-5" /></button>
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 min-w-0">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5 truncate">
                {i > 0 && <span>/</span>}
                <span className={i === crumbs.length - 1 ? "text-slate-900 dark:text-white capitalize" : "capitalize"}>{c}</span>
              </span>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={toggleTheme} className="h-9 w-9 grid place-items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="relative h-9 w-9 grid place-items-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <div className="relative">
              <button onClick={() => setUserMenu((v) => !v)} className="flex items-center gap-2 pl-2 pr-3 h-9 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-gold to-amber-600 grid place-items-center text-navy-deep text-xs font-semibold uppercase">
                  {user?.name?.[0] ?? "A"}
                </div>
                <span className="hidden sm:inline text-sm">{user?.name ?? "Admin"}</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {userMenu && (
                <div onMouseLeave={() => setUserMenu(false)} className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md shadow-lg overflow-hidden">
                  <Link to="/admin/profile" className="block px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Profile</Link>
                  <Link to="/admin/settings" className="block px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Settings</Link>
                  <button onClick={doLogout} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 text-red-600">Sign out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
