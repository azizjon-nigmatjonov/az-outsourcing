'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, Globe } from 'lucide-react'
import { locales, localeNames, type Locale } from '@/shared/config/i18n'
import { cn } from '@/shared/lib/utils'

interface LocaleSwitcherProps {
  lang: Locale
}

export function LocaleSwitcher({ lang }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/') || '/')
  }

  return (
    <Select.Root value={lang} onValueChange={handleChange}>
      <Select.Trigger
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors outline-none hover:bg-white/10',
        )}
        aria-label="Select language"
      >
        <Globe size={14} className="text-cyan-300" />
        <Select.Value />
        <Select.Icon>
          <ChevronDown size={14} className="text-slate-400" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-50 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-[#131b2e] shadow-lg"
          position="popper"
          sideOffset={4}
        >
          <Select.Viewport className="p-1">
            {locales.map((locale) => (
              <Select.Item
                key={locale}
                value={locale}
                className="flex cursor-pointer items-center rounded-md px-3 py-1.5 text-sm text-slate-200 outline-none hover:bg-white/10 hover:text-emerald-300 data-[state=checked]:bg-white/10 data-[state=checked]:text-emerald-300"
              >
                <Select.ItemText>{localeNames[locale]}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
