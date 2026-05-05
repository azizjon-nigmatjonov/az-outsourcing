'use client'

import { motion } from 'framer-motion'
import { Users, FolderKanban, Clock } from 'lucide-react'

type Dict = {
  about: {
    title: string
    subtitle: string
    stats: {
      clients: string
      projects: string
      years: string
    }
  }
}

interface AboutProps {
  dict: Dict
}

const statIcons = [Users, FolderKanban, Clock]

export function About({ dict }: AboutProps) {
  const stats = [
    dict.about.stats.clients,
    dict.about.stats.projects,
    dict.about.stats.years,
  ]

  return (
    <section id="about" className="bg-[#060e20] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.about.title}
          </h2>
          <p className="text-lg text-slate-400">{dict.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={stat}
                className="glass-card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Icon size={22} />
                </div>
                <p className="text-xl font-bold text-white">{stat}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
