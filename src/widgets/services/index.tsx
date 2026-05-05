'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Users, ShieldCheck, Lightbulb } from 'lucide-react'

type ServiceDict = { title: string; description: string }
type Dict = {
  services: {
    title: string
    subtitle: string
    items: {
      software: ServiceDict
      design: ServiceDict
      bpo: ServiceDict
      qa: ServiceDict
      consulting: ServiceDict
    }
  }
}

const icons = {
  software: Code2,
  design: Palette,
  bpo: Users,
  qa: ShieldCheck,
  consulting: Lightbulb,
}

interface ServicesProps {
  dict: Dict
}

export function Services({ dict }: ServicesProps) {
  const serviceKeys = Object.keys(dict.services.items) as Array<
    keyof typeof icons
  >

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="text-lg text-slate-400">{dict.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = icons[key]
            const item = dict.services.items[key]
            return (
              <motion.div
                key={key}
                className="glass-card group rounded-2xl p-6 transition-all hover:border-cyan-300/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
