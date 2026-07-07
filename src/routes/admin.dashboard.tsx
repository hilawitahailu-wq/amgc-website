import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/admin/ui";
import { useCollection, seeds } from "@/lib/admin/store";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Newspaper, Briefcase, GraduationCap, Handshake, Download, MapPin, Building2, Eye, Languages, Sparkles } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend, Filler);

export const Route = createFileRoute("/admin/dashboard")({ component: Dashboard });

const visits = [
  { label: "Jan", value: 2400 },
  { label: "Feb", value: 3100 },
  { label: "Mar", value: 2800 },
  { label: "Apr", value: 3900 },
  { label: "May", value: 4800 },
  { label: "Jun", value: 5200 },
  { label: "Jul", value: 6100 },
  { label: "Aug", value: 5800 },
  { label: "Sep", value: 6700 },
];
const traffic = [
  { label: "Organic", value: 4200, color: "#c8a24b" },
  { label: "Direct", value: 2600, color: "#0b1e3f" },
  { label: "Social", value: 1800, color: "#3b5998" },
  { label: "Referral", value: 900, color: "#94a3b8" },
];

function Dashboard() {
  const news = useCollection("amgc_news", seeds.news);
  const projects = useCollection("amgc_projects", seeds.projects);
  const careers = useCollection("amgc_careers", seeds.careers);
  const partners = useCollection("amgc_partners", seeds.partners);
  const downloads = useCollection("amgc_downloads", seeds.downloads);
  const offices = useCollection("amgc_offices", seeds.offices);
  const divisions = useCollection("amgc_divisions", seeds.divisions);
  const languages = useCollection("amgc_languages", seeds.languages);

  const cards = [
    { label: "Total News", value: news.items.length, icon: Newspaper, color: "from-blue-500 to-blue-600" },
    { label: "Total Projects", value: projects.items.length, icon: Briefcase, color: "from-amber-500 to-amber-600" },
    { label: "Total Careers", value: careers.items.length, icon: GraduationCap, color: "from-emerald-500 to-emerald-600" },
    { label: "Total Partners", value: partners.items.length, icon: Handshake, color: "from-violet-500 to-violet-600" },
    { label: "Total Downloads", value: downloads.items.length, icon: Download, color: "from-rose-500 to-rose-600" },
    { label: "Office Locations", value: offices.items.length, icon: MapPin, color: "from-cyan-500 to-cyan-600" },
    { label: "Business Divisions", value: divisions.items.length, icon: Building2, color: "from-indigo-500 to-indigo-600" },
    { label: "Website Visits", value: "48.2K", icon: Eye, color: "from-orange-500 to-orange-600" },
    { label: "Active Languages", value: languages.items.filter((l: any) => l.active).length, icon: Languages, color: "from-teal-500 to-teal-600" },
  ];

  const quickActions = [
    { label: "Add News", caption: "Publish an update", icon: Newspaper },
    { label: "Create Project", caption: "Track a new initiative", icon: Briefcase },
    { label: "Open Job", caption: "Add a vacancy", icon: GraduationCap },
    { label: "Add Partner", caption: "Register a company", icon: Handshake },
  ];

  const recent = [
    { who: "Admin", what: "published news 'AMGC expands into East Africa'", when: "2h ago" },
    { who: "Editor", what: "updated project 'Djibouti Terminal'", when: "5h ago" },
    { who: "Admin", what: "added partner 'Kadoglu Group'", when: "Yesterday" },
    { who: "Admin", what: "opened job 'Logistics Manager'", when: "2 days ago" },
  ];

  const lineData = {
    labels: visits.map((item) => item.label),
    datasets: [
      {
        label: "Website visits",
        data: visits.map((item) => item.value),
        borderColor: "#c8a24b",
        backgroundColor: "rgba(200, 162, 75, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["News", "Projects", "Careers", "Partners", "Downloads", "Offices"],
    datasets: [
      {
        label: "Content items",
        data: [
          news.items.length,
          projects.items.length,
          careers.items.length,
          partners.items.length,
          downloads.items.length,
          offices.items.length,
        ],
        backgroundColor: "#0b1e3f",
        borderRadius: 8,
      },
    ],
  };

  const doughnutData = {
    labels: traffic.map((item) => item.label),
    datasets: [
      {
        data: traffic.map((item) => item.value),
        backgroundColor: traffic.map((item) => item.color),
      },
    ],
  };

  return (
    <>
      <PageHeader title="Dashboard" subtitle="Overview of your AMGC content and traffic." />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Card key={c.label} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{c.label}</p>
                  <p className="text-2xl font-semibold mt-2">{c.value}</p>
                </div>
                <div className={`h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br ${c.color} text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 mt-6 lg:grid-cols-[1.4fr_0.6fr]">
        <Card className="p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="font-semibold">Quick actions</h3>
              <p className="text-sm text-slate-500">Start your next content update or publish workflow.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              <Sparkles className="h-4 w-4" /> Boost productivity
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button key={action.label} type="button" className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-gold/40 hover:bg-white dark:border-slate-800 dark:bg-slate-950 dark:hover:border-gold/50 dark:hover:bg-slate-900">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white group-hover:bg-gold transition">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold">{action.label}</p>
                    <p className="text-sm text-slate-500 mt-1">{action.caption}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-4">Traffic sources</h3>
          <div className="h-64">
            <Doughnut data={doughnutData} options={{ plugins: { legend: { position: "bottom" } } }} />
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-6">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Website visits</h3>
            <span className="text-xs text-slate-500">Last 9 months</span>
          </div>
          <div className="h-64">
            <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true } } }} />
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-4">Content by module</h3>
          <div className="h-64">
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true } } }} />
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-6">
        <Card className="p-5 lg:col-span-2">
          <h3 className="font-semibold mb-4">Top content trends</h3>
          <div className="h-64 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Engagement uplift</p>
                  <p className="text-3xl font-semibold">+24%</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Healthy</div>
              </div>
              <p className="text-sm text-slate-600">News and project updates are driving conversions this quarter. Keep publishing frequent updates across priority divisions.</p>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-4">Recent activity</h3>
          <ul className="space-y-3">
            {recent.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <div className="h-8 w-8 rounded-full bg-gold/20 text-navy-deep grid place-items-center font-semibold text-xs shrink-0">
                  {r.who[0]}
                </div>
                <div className="min-w-0">
                  <p><span className="font-medium">{r.who}</span> {r.what}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{r.when}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
