"use client";
import React, { useState } from "react";

export default function NotificationPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const sendNotification = async () => {
    const response = await fetch("/api/expo-send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Notification sent successfully!");
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <div>
      <h1>Send Notification</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <button onClick={sendNotification}>Send</button>
    </div>
  );
}
