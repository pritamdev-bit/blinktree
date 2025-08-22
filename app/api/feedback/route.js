import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body);
        const client = await clientPromise;
        const db = client.db("blinktree");
        const collection = db.collection("feedback");
        const result = await collection.insertOne(body);
        return NextResponse.json({ success: true, data: result, message: "Feedback submitted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: error.message, message: "Failed to submit feedback" }, { status: 500 });
    }
}