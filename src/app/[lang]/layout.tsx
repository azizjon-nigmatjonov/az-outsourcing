import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/shared/lib/dictionary'
import { locales } from '@/shared/config/i18n'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import '../globals.css'
import '@fontsource-variable/inter'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: {
      default: 'AZ Outsourcing',
      template: '%s | AZ Outsourcing',
    },
    description: dict.hero.subtitle,
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col bg-[#0b1326] font-sans antialiased">
      <Header dict={dict} lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} lang={lang} />
    </div>
  )
}
