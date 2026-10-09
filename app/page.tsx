import { site } from "@/lib/site";
import { FeedbackForm } from "./components/FeedbackForm";
import { Header } from "./components/Header";

const sectionClass = "mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20";
const headingClass = "font-serif text-4xl font-semibold text-olive-dark";

export default function Home() {
  const { hero, about, feedback, preOrder } = site;

  return (
    <>
      <Header />

      <main id="top" className="flex-1">
        <section className="bg-olive-dark text-cream">
          <div className="mx-auto max-w-5xl px-6 py-28">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">
              {hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/85">{hero.body}</p>
            <a
              href={hero.cta.href}
              className="mt-10 inline-block rounded-full bg-gold px-7 py-3 font-medium text-olive-dark transition-colors hover:bg-cream"
            >
              {hero.cta.label}
            </a>
          </div>
        </section>

        <section id="about" className={sectionClass}>
          <h2 className={headingClass}>{about.heading}</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-olive/15 bg-white p-6">
                <dt className="text-sm font-medium uppercase tracking-widest text-olive">{fact.label}</dt>
                <dd className="mt-2 font-serif text-2xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="border-y border-olive/15 bg-white/60">
          <section id="feedback" className={sectionClass}>
            <h2 className={headingClass}>{feedback.heading}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8">{feedback.body}</p>
            <div className="mt-10 max-w-2xl">
              <FeedbackForm />
            </div>
          </section>
        </div>

        <section id="pre-order" className={sectionClass}>
          <h2 className={headingClass}>{preOrder.heading}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8">{preOrder.body}</p>
        </section>
      </main>

      <footer className="border-t border-olive/15">
        <p className="mx-auto max-w-5xl px-6 py-8 text-sm text-ink/60">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </>
  );
}
