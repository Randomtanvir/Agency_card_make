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
export async function GET(request) {
  await connectMongo();

  try {
    // 🔹 query params থেকে page আর limit ধরা
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    // 🔹 ডেটা ফেচ করা skip & limit দিয়ে
    const applications = await Application.find()
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    // 🔹 মোট কতগুলো ডকুমেন্ট আছে সেটা বের করা
    const totalDocs = await Application.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    return NextResponse.json(
      {
        message: "✅ Applications fetched successfully",
        applications,
        pagination: {
          totalDocs,
          totalPages,
          currentPage: page,
          pageSize: limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error fetching applications:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Failed to fetch" },
      { status: 500 }
    );
  }
}
