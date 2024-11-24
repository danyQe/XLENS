import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000'


export async function GET() {
  try {
    const response = await fetch(`${BACKEND_URL}/viral`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Viral tweet generation failed:', error)
    return NextResponse.json(
      { error: 'Failed to generate viral tweets' },
      { status: 500 }
    )
  }
}