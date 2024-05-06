import { NextResponse } from "next/server";

export async function POST(request) {
    const formdata = await request.json();
    console.log("formData:",formdata)
  return NextResponse.json({ message: "nayem here" }, { status: 200 });
}
