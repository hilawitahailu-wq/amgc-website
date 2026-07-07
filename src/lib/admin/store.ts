// Simple localStorage-backed CRUD store. Swap for axios calls to your Node/Express/MongoDB API.
import { useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchResource, saveResource } from "@/lib/api";

type Entity = { id: string; [k: string]: any };

const uid = () => Math.random().toString(36).slice(2, 10);

function getLocalData<T extends Entity>(key: string, seed: T[]) {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return seed;
    return JSON.parse(raw);
  } catch {
    return seed;
  }
}

export function useCollection<T extends Entity>(key: string, seed: T[] = []) {
  const queryClient = useQueryClient();
  const initialData = useMemo(() => getLocalData(key, seed), [key, seed]);

  const query = useQuery<T[], Error>({
  queryKey: [key],
  queryFn: async () => {
    const remote = await fetchResource<T>(key, seed);

    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(remote));
    }

    return remote;
  },
  initialData,
  staleTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false,
});
  const sync = (items: T[]) => {
    queryClient.setQueryData([key], items);
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(items));
    }
    saveResource(key, items).catch(() => undefined);
  };

  const items = query.data ?? [];

  useEffect(() => {
    if (!query.data && initialData) {
      queryClient.setQueryData([key], initialData);
    }
  }, [initialData, key, query.data, queryClient]);

  return {
    items,
    add: (data: Omit<T, "id">) => {
      const next = [{ ...(data as any), id: uid(), createdAt: new Date().toISOString() } as T, ...items];
      sync(next);
    },
    update: (id: string, patch: Partial<T>) => {
      sync(items.map((item) => (item.id === id ? { ...item, ...patch } : item)));
    },
    remove: (id: string) => {
      sync(items.filter((item) => item.id !== id));
    },
    reorder: (ids: string[]) => {
      const map = new Map(items.map((item) => [item.id, item]));
      sync(ids.map((id) => map.get(id)).filter(Boolean) as T[]);
    },
  };
}

// Seeds
export const seeds = {
  news: [
    { id: "n1", title: "AMGC expands into East Africa", status: "published", author: "Admin", date: "2026-05-10", excerpt: "New offices announced." },
    { id: "n2", title: "Partnership with Kadoglu Group", status: "draft", author: "Admin", date: "2026-06-01", excerpt: "Strategic MoU signed." },
  ],
  projects: [
    { id: "p1", title: "Djibouti Port Terminal", division: "Logistics", status: "active", location: "Djibouti" },
    { id: "p2", title: "Edible Oil Refinery — Addis", division: "Manufacturing", status: "planning", location: "Ethiopia" },
  ],
  leadership: [
    { id: "l1", name: "Abdoulwahab Mahamoud", title: "Group Chairman", order: 1 },
    { id: "l2", name: "Executive Director", title: "CEO", order: 2 },
  ],
  divisions: [
    { id: "d1", name: "Trade & Distribution", icon: "🌍" },
    { id: "d2", name: "Logistics & Shipping", icon: "🚢" },
    { id: "d3", name: "Manufacturing", icon: "🏭" },
  ],
  offices: [
    { id: "o1", country: "Djibouti", city: "Djibouti City", address: "Port Area", phone: "+253 21 000 000", email: "djibouti@amgc.com", map: "" },
    { id: "o2", country: "Ethiopia", city: "Addis Ababa", address: "Bole", phone: "+251 11 000 000", email: "addis@amgc.com", map: "" },
  ],
  statistics: [
    { id: "s1", label: "Countries", value: 12, icon: "🌐", order: 1 },
    { id: "s2", label: "Employees", value: 850, icon: "👥", order: 2 },
    { id: "s3", label: "Years", value: 25, icon: "⭐", order: 3 },
  ],
  partners: [
    { id: "pt1", name: "Golden Africa Djibouti", website: "https://www.goldenafricadjibouti.com/", logo: "" },
    { id: "pt2", name: "Tajchem", website: "https://tajchem.com/", logo: "" },
    { id: "pt3", name: "Kadoglu Yag", website: "https://kadoogluyag.com.tr/en/", logo: "" },
  ],
  downloads: [
    { id: "dl1", name: "Company Brochure 2026", category: "Brochures", type: "PDF", size: "2.4 MB" },
  ],
  careers: [
    { id: "c1", title: "Logistics Manager", location: "Djibouti", type: "Full-time", status: "open" },
    { id: "c2", title: "Marketing Lead", location: "Addis Ababa", type: "Full-time", status: "closed" },
  ],
  languages: [
    { id: "lang1", code: "en", name: "English", default: true, active: true },
    { id: "lang2", code: "ar", name: "Arabic", default: false, active: true },
    { id: "lang3", code: "fr", name: "French", default: false, active: false },
  ],
  users: [
    { id: "u1", name: "Admin", email: "admin@amgc.com", role: "Super Admin", status: "active" },
  ],
};
