"use client";
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle, Loader } from "lucide-react"; // Add Loader icon
import { v4 as uuid4 } from "uuid"; // Import uuid4

export default function ChatSourcingInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [sessionId, setSessionId] = useState(null); // State for session_id
  const [isLoading, setIsLoading] = useState(false); // State for loading

  useEffect(() => {
    // Check for session_id in localStorage
    let storedSessionId = localStorage.getItem("session_id");
    if (!storedSessionId) {
      // If no session_id, generate a new one
      storedSessionId = uuid4();
      localStorage.setItem("session_id", storedSessionId); // Save to localStorage
    }
    setSessionId(storedSessionId); // Set session_id in state
  }, []); // Run once on component mount

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error("Message is empty");
      return; // Do not send empty messages
    }

    setIsLoading(true); // Start loading state

    try {
      // Add user's message to chat view
      onSendMessage({ text: message, isUser: true });

      const response = await fetch("http://localhost:8000/sourcing-applicants/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: message}), // Use session_id from state
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      // Extract response field from the API JSON
      const apiResponse = data.response || "No response received.";
      console.log(apiResponse)
      const parsedResponse = apiResponse
      const candidatesArray = parsedResponse.split('-----------------------------')
        .map(candidate => candidate.trim())
        .filter(candidate => candidate.length > 0);

      console.log(candidatesArray);
      
      // Add API's response to chat view
      onSendMessage({ text: apiResponse, isUser: false });

    } catch (error) {
      console.error("Error sending message:", error.message);
    } finally {
      setIsLoading(false); // End loading state
    }

    // Clear input field after sending
    setMessage("");
  };

  return (
    <div className="py-4 relative">
      <Textarea
        className="bg-muted h-32"
        placeholder="Type your message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading} // Disable input while loading
      />
      <div className="flex justify-between items-center absolute bottom-5 w-full px-3">
        <Button variant="link" className="rounded-full">
          <PlusCircle />
        </Button>
        <Button
          className="rounded-full px-3"
          onClick={handleSendMessage}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? <Loader className="animate-spin" /> : <ArrowRight />}
        </Button>
      </div>
    </div>
  );
}
