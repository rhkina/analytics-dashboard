import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-ideal-dog-38590.upstash.io',
  token: process.env.REDIS_KEY!,
})
