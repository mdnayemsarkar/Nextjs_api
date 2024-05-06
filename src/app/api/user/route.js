import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    { msg: "This is my front page api" },
    { status: 200 }
  );
}
