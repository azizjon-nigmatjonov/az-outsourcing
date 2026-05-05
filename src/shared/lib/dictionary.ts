import 'server-only'
import type { Locale } from '@/shared/config/i18n'
import { locales } from '@/shared/config/i18n'

type Dictionary = typeof import('../../../messages/en.json')

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('../../../messages/en.json').then((m) => m.default),
  ru: () => import('../../../messages/ru.json').then((m) => m.default),
  uz: () => import('../../../messages/uz.json').then((m) => m.default),
}

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale)

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]()
