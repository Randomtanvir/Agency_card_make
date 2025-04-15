import connectMongo from "@/db/db";
import { Application } from "@/models/certifacate.model";
import { generateSecureToken } from "@/utils/cripto";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectMongo();
  try {
    const data = await req.json();
    const token = generateSecureToken(64);
    const newApplication = new Application({
      ...data,
      uniqueValue: token,
    });
    const savedApp = await newApplication.save();
    return NextResponse.json(savedApp, { status: 201 });
  } catch (error) {
    console.error("API POST error:", error);
    return NextResponse.json(
      {
        error: true,
        message: error.message || "Server error",
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  await connectMongo();

  try {
    const applications = await Application.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Failed to fetch" },
      { status: 500 }
    );
  }
}
