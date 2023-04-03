/// <reference types="next-auth" />

import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const options = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  debug: false,
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)