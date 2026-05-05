import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/shared/lib/dictionary'
import { ContactPage } from '@/pages-segments/contact'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return <ContactPage dict={dict} lang={lang} />
}
