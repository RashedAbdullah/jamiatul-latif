import { NextResponse } from "next/server";
import { Expo } from "expo-server-sdk";
import { connectMongo } from "@/database/connection";
import { expoTokenModel } from "@/models/expo-token-model";

let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

export async function POST(request) {
  try {
    const { title, body } = await request.json();

    if (!title || !body) {
      return NextResponse.json(
        { error: "Title and body are required" },
        { status: 400 }
      );
    }

    await connectMongo();
    const tokens = await expoTokenModel.find({});

    const validTokens = tokens
      .map((t) => t.token)
      .filter((token) => Expo.isExpoPushToken(token));

    const messages = validTokens.map((token) => ({
      to: token,
      sound: "default",
      title,
      body,
    }));

    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];

    for (const chunk of chunks) {
      try {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        console.error("Error sending notification chunk:", error);
      }
    }

    return NextResponse.json({ success: true, tickets });
  } catch (error) {
    console.error("Error processing notification:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
