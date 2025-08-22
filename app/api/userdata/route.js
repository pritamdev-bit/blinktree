import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db("blinktree");
        const collection = db.collection("links");
        const result = await collection.findOne({ handle: body.handle });
        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}