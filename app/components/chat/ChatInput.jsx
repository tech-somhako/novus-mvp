/* import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle} from "lucide-react";
export default function ChatInput() {
  return (
    <>
    <div className="py-4 relative">
      <Textarea className="bg-muted h-32" placeholder="Type your message here." />
      <div className=" justify-between ">
      <Button variant="link" className="rounded-full absolute bottom-5"><PlusCircle /> </Button>
      <Button className="rounded-full absolute bottom-6 right-3 px-3"><ArrowRight /></Button>
      </div>
    
    </div>
    </>
  );
}
 */

/* "use client";
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error('Message is empty');
      return; // Do not send empty messages
    }

    try {
      const response = await fetch('http://172.207.42.36/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }), 
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response:', data);

    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div className="py-4 relative">
      <Textarea
        className="bg-muted h-32"
        placeholder="Type your message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="justify-between">
        <button onClick={() => console.log('Plus clicked')} style={{ border: 'none', background: 'transparent' }}>
          <PlusCircle />
        </button>
        <button
          onClick={handleSendMessage}
          style={{ border: 'none', background: 'transparent' }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
} */

  /* "use client";
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error('Message is empty');
      return; // Do not send empty messages
    }

    try {
      const response = await fetch('http://172.207.42.36/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }), 
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response:', data);

    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div className="py-4 relative">
      <Textarea
        className="bg-muted h-32"
        placeholder="Type your message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-between items-center absolute bottom-5 w-full px-3">
        <Button variant="link" className="rounded-full">
          <PlusCircle />
        </Button>
        <Button
          className="rounded-full px-3"
          onClick={handleSendMessage}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
} */

/*   "use client";
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error('Message is empty');
      return; // Do not send empty messages
    }

    try {
      // Update the chat with the user's message
      onSendMessage({ text: message, isUser: true });

      const response = await fetch('http://172.207.42.36/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }), 
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response:', data);
      
      // Update the chat with the bot's response
      onSendMessage({ text: data.responseText, isUser: false });

    } catch (error) {
      console.error('Error sending message:', error.message);
    }

    // Clear input field after sending
    setMessage('');
  };

  return (
    <div className="py-4 relative">
      <Textarea
        className="bg-muted h-32"
        placeholder="Type your message here."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-between items-center absolute bottom-5 w-full px-3">
        <Button variant="link" className="rounded-full">
          <PlusCircle />
        </Button>
        <Button
          className="rounded-full px-3"
          onClick={handleSendMessage}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
} */

  /* "use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error("Message is empty");
      return;  // Do not send empty messages
    }

    try {
      // Add user's message to chat
      onSendMessage({ text: message, isUser: true });

      const response = await fetch("http://172.207.42.36/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: message }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error(`Server error: ${errorText}`);
      }
      console.log(response,"Response Data");
      const data = await response.json();
      // const apiResponse = "**Job Title: C++ Developer**\n\n**Job Brief:**\nWe are seeking a highly skilled C++ Developer to join our dynamic team. The ideal candidate will have a strong background in C++ programming and a passion for developing innovative software solutions. You will be responsible for designing, implementing, and optimizing software applications that meet our business needs. \n\n**Key Responsibilities:**\n- Develop high-quality, efficient, and maintainable C++ code based on project specifications.\n- Collaborate with cross-functional teams to define, design, and ship new features.\n- Conduct code reviews to ensure code quality and adherence to best practices.\n- Troubleshoot, debug, and optimize existing code to improve performance and reliability.\n- Stay updated on the latest industry trends and technologies related to C++ development.\n\n**Responsibilities:**\n- Analyze user requirements and translate them into technical specifications.\n- Write clean, scalable, and well-documented code.\n- Participate in the full software development lifecycle, from planning to deployment.\n- Continuously evaluate and improve software development processes and practices.\n- Provide technical support and guidance to junior developers as needed."
      // || "No response received.";
      const apiResponse = (data[0]?.response || "No response received.");
      console.log(data,"Raw Data");
      console.log(data[0]?.response,"API Response");

      
      // Add API's response to chat
      onSendMessage({ text: apiResponse, isUser: false });

    } catch (error) {
      console.error("Error sending message:", error.message);
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
      />
      <div className="flex justify-between items-center absolute bottom-5 w-full px-3">
        <Button variant="link" className="rounded-full">
          <PlusCircle />
        </Button>
        <Button className="rounded-full px-3" onClick={handleSendMessage}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
 */

"use client";
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle, Loader } from "lucide-react"; // Add Loader icon
import { v4 as uuid4 } from "uuid"; // Import uuid4

export default function ChatInput({ onSendMessage }) {
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

      const response = await fetch("http://172.207.42.36/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: message, session_id: sessionId }), // Use session_id from state
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      // Extract response field from the API JSON
      const apiResponse = data.response || "No response received.";
      
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
