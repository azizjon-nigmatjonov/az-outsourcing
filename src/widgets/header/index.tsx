'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { LocaleSwitcher } from '@/features/locale-switcher'
import { cn } from '@/shared/lib/utils'
import type { Locale } from '@/shared/config/i18n'

type Dict = {
  nav: { home: string; services: string; about: string; contact: string }
}

interface HeaderProps {
  dict: Dict
  lang: Locale | string
}

export function Header({ dict, lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-[#0b1326]/90 shadow-[0_0_24px_rgba(16,185,129,0.1)] backdrop-blur-sm'
          : 'bg-[#0b1326]/70 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="text-emerald-400">AZ</span>
          <span>Soft</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher lang={lang as Locale} />
          <Button size="sm" asChild className="hidden md:inline-flex">
            <Link href={`/${lang}/contact`}>{dict.nav.contact}</Link>
          </Button>
          <button
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0b1326] px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
