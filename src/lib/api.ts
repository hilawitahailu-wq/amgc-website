import axios from "axios";

const AUTH_STORAGE_KEY = "amgc_admin_auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "",
});

api.interceptors.request.use((config) => {
  if (typeof window === "undefined") return config;
  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (raw && config.headers) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed?.token) {
        config.headers.Authorization = `Bearer ${parsed.token}`;
      }
    } catch {
      // ignore malformed local storage
    }
  }
  return config;
});

export async function loginRequest(email: string, password: string) {
  const response = await api.post("/admin/login", { email, password });
  return response.data;
}

export async function fetchResource<T>(resource: string, fallback: T[]) {
  try {
    const response = await api.get<T[]>(`/api/${resource}`);
    return response.data;
  } catch {
    return fallback;
  }
}

export async function saveResource<T>(resource: string, data: T[]) {
  try {
    await api.put(`/api/${resource}`, data);
  } catch {
    return;
  }
}
