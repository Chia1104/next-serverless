import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    foo: process.env.FOO,
    bar: process.env.BAR,
  });
}
