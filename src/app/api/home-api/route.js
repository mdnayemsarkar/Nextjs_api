import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    {
      msg: "This is my Home page api",
      id: 1,
      name: "John Doe",
      age: 20,
      grade: "A",
    },

    { status: 200 }
  );
}
