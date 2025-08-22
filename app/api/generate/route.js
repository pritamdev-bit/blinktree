import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log(body);
        const client = await clientPromise;
        const db = client.db("blinktree");
        const collection = db.collection("links");
        const existingLink = await collection.findOne({ handle: body.handle })

        if (existingLink) {
            return NextResponse.json({ success: false, message: "Link already exists" }, { status: 400 });
        }
        const result = await collection.insertOne(body);
        return NextResponse.json({ success: true, data: result, message: "Link added successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({success: false, error: error.message }, { status: 500 });
    }
}