import { NextResponse } from "next/server";
import countries from "./data.json";

export async function GET(request) {
  return NextResponse.json(countries);
}
