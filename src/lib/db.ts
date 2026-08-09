import { neon } from '@neondatabase/serverless'

const DEFAULT_DATABASE_URL =
  'postgresql://neondb_owner:npg_R1M6DosiBupY@ep-lucky-wind-axn18abk-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

export function getDb() {
  const databaseUrl = process.env.DATABASE_URL || DEFAULT_DATABASE_URL
  return neon(databaseUrl)
}

export async function initDb() {
  const sql = getDb()
  await sql`
    CREATE TABLE IF NOT EXISTS demo_bookings (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      phone VARCHAR(50),
      preferred_date VARCHAR(50),
      time_slot VARCHAR(50),
      notes TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `
}
