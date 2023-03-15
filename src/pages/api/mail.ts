// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

type Data = {
  status: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Telefone: ${body.phone}\r\n
    Local de atendimento: ${body.office}
  `

  const data = {
    to: 'savioabfialho@gmail.com',
    from: 'savioabfialho@gmail.com',
    subject: 'Teste dr leo',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  await mail.send(data)
  
  res.status(200).json({ status: 'Ok' })
}
