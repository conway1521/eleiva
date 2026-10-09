import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-olive/15 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-4">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-6 text-sm font-medium">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-olive">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
