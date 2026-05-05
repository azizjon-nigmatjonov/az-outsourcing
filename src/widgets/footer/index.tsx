import Link from 'next/link'
import type { Locale } from '@/shared/config/i18n'

type Dict = {
  nav: { home: string; services: string; about: string; contact: string }
  footer: {
    description: string
    rights: string
    links: { privacy: string; terms: string }
  }
}

interface FooterProps {
  dict: Dict
  lang: Locale | string
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#060e20] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link
              href={`/${lang}`}
              className="mb-4 flex items-center gap-2 text-lg font-bold tracking-tight text-white"
            >
              <span className="text-emerald-400">AZ</span>
              <span>Soft</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              {dict.nav.services}
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href={`/${lang}#services`}
                className="text-slate-400 hover:text-emerald-300"
              >
                {dict.nav.home}
              </Link>
              <Link
                href={`/${lang}#about`}
                className="text-slate-400 hover:text-emerald-300"
              >
                {dict.nav.about}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-slate-400 hover:text-emerald-300"
              >
                {dict.nav.contact}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:info@az-outsourcing.com"
                className="text-slate-400 hover:text-cyan-300"
              >
                info@az-outsourcing.com
              </a>
              <a
                href="tel:+998901234567"
                className="text-slate-400 hover:text-cyan-300"
              >
                +998 90 123 45 67
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AZ Outsourcing. {dict.footer.rights}
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              href={`/${lang}/privacy`}
              className="text-slate-500 hover:text-slate-200"
            >
              {dict.footer.links.privacy}
            </Link>
            <Link
              href={`/${lang}/terms`}
              className="text-slate-500 hover:text-slate-200"
            >
              {dict.footer.links.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
