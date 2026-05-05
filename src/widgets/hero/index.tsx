'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/shared/ui/button'

type Dict = {
  hero: {
    badge: string
    title: string
    subtitle: string
    cta: string
    ctaSecondary: string
  }
}

interface HeroProps {
  dict: Dict
  lang: string
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="technical-border mb-6 inline-flex items-center rounded-full bg-white/5 px-3 py-1">
              <span className="text-xs font-semibold tracking-[0.12em] text-emerald-300 uppercase">
                {dict.hero.badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your{' '}
            <span className="accent-glow text-emerald-400">
              Technology Partner
            </span>{' '}
            - {dict.hero.title}
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href={`/${lang}/contact`} className="gap-2">
                {dict.hero.cta}
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${lang}#services`}>{dict.hero.ctaSecondary}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
