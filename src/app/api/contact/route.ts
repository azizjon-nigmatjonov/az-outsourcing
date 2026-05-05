import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
})

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json(
      { ok: false, error: 'Telegram is not configured.' },
      { status: 500 },
    )
  }

  try {
    const body = await request.json()
    const payload = contactSchema.parse(body)

    const text = [
      '<b>New Contact Form Submission</b>',
      '',
      `<b>Name:</b> ${escapeHtml(payload.name)}`,
      `<b>Email:</b> ${escapeHtml(payload.email)}`,
      `<b>Company:</b> ${escapeHtml(payload.company?.trim() || '-')}`,
      `<b>Service:</b> ${escapeHtml(payload.service?.trim() || '-')}`,
      `<b>Message:</b>`,
      escapeHtml(payload.message),
    ].join('\n')

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      },
    )

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { ok: false, error: 'Failed to send message to Telegram.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid form data.' },
      { status: 400 },
    )
  }
}
