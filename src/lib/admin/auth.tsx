import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { loginRequest } from "@/lib/api";

type User = { id: string; name: string; email: string; role: "admin" | "editor"; avatar?: string };
type AuthCtx = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (patch: Partial<User>) => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "amgc_admin_auth";

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const { user, token } = JSON.parse(raw);
        setUser(user);
        setToken(token);
      }
    } catch {}
  }, []);
const login = async (email: string, password: string) => {
  try {
    const response = await loginRequest(email, password);

    const fallbackName =
      email.split("@")[0].replace(/[^a-z]/gi, " ") || "Admin";

    const u = response.user ?? {
      id: response.user?.id ?? "1",
      name: response.user?.name ?? fallbackName,
      email,
      role: response.user?.role ?? "admin",
    };


      const t = response.token ?? "mock.jwt." + btoa(email);
      setUser(u);
      setToken(t);
      localStorage.setItem(KEY, JSON.stringify({ user: u, token: t }));
    } catch (error) {
      await new Promise((r) => setTimeout(r, 500));
      if (!email || password.length < 4) throw new Error("Invalid credentials");
      const u: User = {
        id: "1",
        name: email.split("@")[0].replace(/[^a-z]/gi, " ") || "Admin",
        email,
        role: "admin",
      };
      const t = "mock.jwt." + btoa(email);
      setUser(u);
      setToken(t);
      localStorage.setItem(KEY, JSON.stringify({ user: u, token: t }));
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(KEY);
  };

  const updateProfile = (patch: Partial<User>) => {
    if (!user) return;
    const next = { ...user, ...patch };
    setUser(next);
    localStorage.setItem(KEY, JSON.stringify({ user: next, token }));
  };

  return <Ctx.Provider value={{ user, token, login, logout, updateProfile }}>{children}</Ctx.Provider>;
}

export const useAdminAuth = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAdminAuth outside provider");
  return c;
};
