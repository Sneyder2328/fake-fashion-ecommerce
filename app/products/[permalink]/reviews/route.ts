import { NextResponse } from "next/server";

// get reviews for [permalink] product, use faker
export async function GET(
  request: Request,
  { params: { permalink } }: { params: { permalink: string } }
) {
  console.log("permalink=", permalink);
}

// Revalidate every 60 seconds
export const revalidate = 60;
