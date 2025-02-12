import { neon } from "@neondatabase/serverless";
import postgres from 'postgres';
async function getData() {
  const sql = neon(process.env.DATABASE_URL);

  const response = await sql`SELECT version()`;
  console.log(response);
  return response;
}

export default async function Page() {
  const data = await getData();
}