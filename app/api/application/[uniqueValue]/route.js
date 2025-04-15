import connectMongo from "@/db/db";
import { Application } from "@/models/certifacate.model";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  await connectMongo();

  try {
    const { uniqueValue } = params;
    const application = await Application.findOne({ uniqueValue });
    if (!application) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(application, { status: 200 });
  } catch (error) {
    console.error("GET by uniqueValue error:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_, { params }) {
  await connectMongo();

  try {
    const { uniqueValue } = params;

    const deletedApp = await Application.findOneAndDelete({ uniqueValue });

    if (!deletedApp) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Deleted successfully ✅", deletedApp },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
