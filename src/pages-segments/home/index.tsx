import { Hero } from '@/widgets/hero'
import { Services } from '@/widgets/services'
import { About } from '@/widgets/about'
import { ContactForm } from '@/features/contact-form'
import type { Locale } from '@/shared/config/i18n'

type Dict = Parameters<typeof Hero>[0]['dict'] &
  Parameters<typeof Services>[0]['dict'] &
  Parameters<typeof About>[0]['dict'] & {
    contact: {
      title: string
      subtitle: string
      form: Parameters<typeof ContactForm>[0]['dict']['contact']['form']
    }
  }

interface HomePageProps {
  dict: Dict
  lang: Locale | string
}

export function HomePage({ dict, lang }: HomePageProps) {
  return (
    <>
      <Hero dict={dict} lang={lang as string} />
      <Services dict={dict} />
      <About dict={dict} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-white">
              {dict.contact.title}
            </h2>
            <p className="text-lg text-slate-400">{dict.contact.subtitle}</p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <ContactForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  )
}
