import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/shared/lib/dictionary'
import { HomePage } from '@/pages-segments/home'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return <HomePage dict={dict} lang={lang} />
}
