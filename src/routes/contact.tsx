import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AMGC — Partner With Us" },
      { name: "description", content: "Talk to AMGC about trade, investment, or long-term partnership opportunities across our group of companies." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="bg-navy-deep text-white min-h-screen">
      {/* HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-x max-w-5xl relative">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-8">— Get in Touch</div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-balance">
            Start a conversation with AMGC.
          </h1>
          <p className="mt-8 text-white/70 text-lg max-w-2xl leading-relaxed">
            Whether you're exploring a trade partnership, investment opportunity, or long-term
            collaboration — our team is ready to talk.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-32">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          {/* LEFT — details */}
          <aside className="lg:col-span-4 space-y-10">
            <InfoBlock
              icon={<MapPin className="w-5 h-5" />}
              label="Corporate Head Office"
              lines={["Bole Sub-city, Africa Avenue", "Addis Ababa, Ethiopia"]}
            />
            <InfoBlock
              icon={<Phone className="w-5 h-5" />}
              label="Phone"
              lines={["+251 11 000 0000"]}
              href="tel:+251110000000"
            />
            <InfoBlock
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              lines={["info@amgc.co"]}
              href="mailto:info@amgc.co"
            />
            <div className="pt-8 border-t border-white/10">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Office Hours</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Monday – Friday<br />
                8:30 AM – 6:00 PM (EAT)
              </p>
            </div>
          </aside>

          {/* RIGHT — form */}
          <div className="lg:col-span-8">
            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 md:p-12">
              {sent ? (
                <div className="py-24 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center mb-6" style={{ background: "var(--gradient-gold)" }}>
                    <ArrowRight className="w-6 h-6 text-navy-deep" />
                  </div>
                  <h3 className="font-display text-3xl mb-3">Thank you.</h3>
                  <p className="text-white/70">Our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Full Name" name="fullName" value={form.fullName} onChange={update("fullName")} required />
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={update("email")} required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={update("phone")} required />
                    <Field label="Company" name="company" value={form.company} onChange={update("company")} />
                  </div>
                  <Field label="Subject" name="subject" value={form.subject} onChange={update("subject")} required />
                  <Field label="Message" name="message" textarea value={form.message} onChange={update("message")} required />

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy-deep uppercase tracking-widest text-xs font-semibold hover:bg-white transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoBlock({
  icon,
  label,
  lines,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{label}</div>
      <div className="flex gap-4 items-start">
        <span className="text-gold mt-0.5">{icon}</span>
        <div className="text-white/80 leading-relaxed">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="block hover:text-gold transition-colors">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-white/20 focus:border-gold focus:ring-0 outline-none py-3 text-white placeholder:text-white/30 transition-colors";
  return (
    <label className="block">
      <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </div>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} value={value} onChange={onChange} required={required} maxLength={1500} />
      ) : (
        <input name={name} type={type} className={cls} value={value} onChange={onChange} required={required} maxLength={200} />
      )}
    </label>
  );
}
