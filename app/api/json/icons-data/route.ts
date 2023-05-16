import { NextResponse } from "next/server";
import dataIcon from "./data-icon.json";

export async function GET() {
    return NextResponse.json(dataIcon)
}