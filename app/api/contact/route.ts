import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Contact form submission:", body);
  return NextResponse.json({ success: true, message: "Message received." });
}
