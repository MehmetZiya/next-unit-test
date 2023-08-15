import { NextResponse } from 'next/server'

export async function GET(req) {
  return NextResponse.json([
    {
      id: 1,
      username: 'mehmet',
    },
    {
      id: 2,
      username: 'ali',
    },
    {
      id: 3,
      username: 'osman',
    },
  ])
}
