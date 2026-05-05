import { Mail, Phone, Send } from 'lucide-react'
import { ContactForm } from '@/features/contact-form'
import type { Locale } from '@/shared/config/i18n'

type Dict = {
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      company: string
      service: string
      message: string
      submit: string
      success: string
      error: string
    }
  }
}

interface ContactPageProps {
  dict: Dict
  lang: Locale | string
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aziz.nigmatjonov7@gmail.com',
    href: 'mailto:aziz.nigmatjonov7@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+998 99 491 28 30',
    href: 'tel:+998994912830',
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@aziz_nodirovich',
    href: 'https://t.me/aziz_nodirovich',
  },
]

export function ContactPage({ dict }: ContactPageProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            {dict.contact.title}
          </h1>
          <p className="text-lg text-slate-400">{dict.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card group flex items-start gap-4 rounded-xl p-5 transition-all hover:border-cyan-300/40"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium tracking-wide text-slate-500 uppercase">
                      {label}
                    </p>
                    <p className="font-medium text-slate-100">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
