'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
})

type FormData = z.infer<typeof schema>

type Dict = {
  contact: {
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

interface ContactFormProps {
  dict: Dict
}

export function ContactForm({ dict }: ContactFormProps) {
  const f = dict.contact.form
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Input
            placeholder={f.name}
            {...register('name')}
            className={errors.name ? 'border-red-400' : ''}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder={f.email}
            {...register('email')}
            className={errors.email ? 'border-red-400' : ''}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <Input placeholder={f.company} {...register('company')} />
      <Input placeholder={f.service} {...register('service')} />

      <div>
        <Textarea
          placeholder={f.message}
          {...register('message')}
          className={errors.message ? 'border-red-400' : ''}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          <CheckCircle size={16} />
          {f.success}
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle size={16} />
          {f.error}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {f.submit}
          </>
        ) : (
          f.submit
        )}
      </Button>
    </form>
  )
}
