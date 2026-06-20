import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: userMessage,
        }
      );

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Error getting response",
        },
      ]);
    }
  };

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          padding: "20px",
        }}
      >
        <h1>🌾 Crop Advisory Dashboard</h1>

        <div
          style={{
            border: "1px solid gray",
            height: "450px",
            overflowY: "auto",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "20px"
          }}
        >
          {chat.map((msg, index) => (
            <p key={index}>
              <strong>
                {msg.sender === "user" ? "You" : "Bot"}:
              </strong>{" "}
              {msg.text}
            </p>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap"
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about crops, pests, irrigation..."
            style={{
              flex: 1,
              padding: "10px",
              minWidth: "250px"
            }}
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>

        <p
          style={{
            color: "red",
            marginTop: "20px"
          }}
        >
          Disclaimer: AI-generated advice should be verified with a licensed agricultural extension officer.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;