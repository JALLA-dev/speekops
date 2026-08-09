import { NextResponse } from 'next/server'
import { getDb, initDb } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, date, timeSlot, notes } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      )
    }

    // Ensure database table exists in Neon DB
    await initDb()

    // Insert booking into Neon Postgres
    const sql = getDb()
    const result = await sql`
      INSERT INTO demo_bookings (name, email, company, phone, preferred_date, time_slot, notes)
      VALUES (${name}, ${email}, ${company || ''}, ${phone || ''}, ${date || ''}, ${timeSlot || ''}, ${notes || ''})
      RETURNING id, created_at;
    `

    return NextResponse.json({
      success: true,
      message: 'Demo session booked successfully!',
      booking: result[0],
    })
  } catch (error: any) {
    console.error('Error saving demo booking to Neon DB:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to book demo session.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await initDb()
    const sql = getDb()
    const bookings = await sql`
      SELECT * FROM demo_bookings ORDER BY created_at DESC LIMIT 50;
    `
    return NextResponse.json({ success: true, count: bookings.length, bookings })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch bookings.' },
      { status: 500 }
    )
  }
}
