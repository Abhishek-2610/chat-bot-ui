"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatInput from "@/components/ChatInput";
import ChatBubble from "./ChatBubble";
import { useScrollToBottom } from "./useScrollToBottom";
import { FeedbackProvider } from "@/components/FeedbackContext";
import FeedbackDialog from "@/components/FeedbackDialog";
import { StreamingContext } from "./StreamingContext";


export interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  // Allow either plain text, JSX, or HTML string as response.
  message: React.ReactNode;
  fullText?: React.ReactNode;
  isLoading?: boolean;
  stream?: boolean;
}

interface ChatPageProps {
  apiEndpoint: string;
  welcomeMessage: string;
}

// Dummy full Markdown document response simulating an LLM output
const sampleMarkdown =`Unexpected error occurred. Please try again later.`;

export default function ChatPage({ apiEndpoint, welcomeMessage }: ChatPageProps) {
  const [containerRef, bottomRef] = useScrollToBottom<HTMLDivElement>();
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isStreamingComplete, setIsStreamingComplete] = useState(true);

  useEffect(() => {
    localStorage.removeItem("chatHistory");
    setChatHistory([]);
  }, []);

  const handleUserSubmit = async (userQuery: string) => {
    const userMsgId = Date.now() + Math.random();
    const aiMsgId = Date.now() + Math.random();

    // Append the user message and an AI placeholder.
    setChatHistory((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", message: userQuery },
      { id: aiMsgId, sender: "ai", message: "", isLoading: true, stream: true },
    ]);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;  // Define the base URL
      const response = await axios.post(`NEXT_PUBLIC_BASE_URL${apiEndpoint}`, { query: userQuery });
      let fullText = response.data.response;
      // For demonstration, if fullText is not provided, we use sampleMarkdown.
      if (!fullText || typeof fullText !== "string") {
        fullText = sampleMarkdown;
      }
      const plainText = fullText;
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.id === aiMsgId
            ? { ...msg, fullText, isLoading: false, stream: false, message: plainText }
            : msg
        )
      );
    } catch (error) {
      const plainText = sampleMarkdown;
      // On error, assign our dummy full HTML document response as plain text.
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.id === aiMsgId
            ? { ...msg, message: plainText, fullText: sampleMarkdown, isLoading: false, stream: false }
            : msg
        )
      );
    }
  };
  const handleNewSession = () => {
    setChatHistory([]);
    localStorage.removeItem("chatHistory");
  };

  useEffect(() => {
    const handleNewSessionEvent = () => {
      handleNewSession();
    };
    window.addEventListener("new-session", handleNewSessionEvent);
    return () => window.removeEventListener("new-session", handleNewSessionEvent);
  }, []);

  const conversationOpen = chatHistory.length > 0;
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("conversation-changed", { detail: { conversationOpen } }));
  }, [conversationOpen]);

  return (
    <StreamingContext.Provider value={{ isStreaming, setIsStreaming, isStreamingComplete, setIsStreamingComplete }}>
  <FeedbackProvider>
    {/* Existing content */}
    <div className="flex flex-col h-screen w-full max-w-screen-md mx-auto bg-[#212121]">
      {!conversationOpen && (
        <div className="text-center mt-28">
          <h2 className="text-3xl sm:text-5xl font-semibold bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
            {welcomeMessage}
          </h2>
        </div>
      )}

      {conversationOpen && (
        <div className="flex-1 overflow-auto mb-16">
          <div ref={containerRef} className="flex flex-col space-y-4 p-4">
            {chatHistory.map((msg, index) => {
              let associatedUserQuery = "";
              let showFeedbackIcons = false;
              if (
                msg.sender === "ai" &&
                index === chatHistory.length - 1 &&
                chatHistory[index - 1]?.sender === "user" &&
                !msg.isLoading &&
                !isStreaming
              ) {
                associatedUserQuery = chatHistory[index - 1].message as string;
                showFeedbackIcons = true;
              }
              return (
                <ChatBubble
                  key={msg.id}
                  sender={msg.sender}
                  message={msg.message}
                  fullText={msg.fullText}
                  isLoading={msg.isLoading}
                  stream={msg.stream}
                  associatedUserQuery={associatedUserQuery}
                  showFeedbackIcons={showFeedbackIcons}
                />
              );
            })}
            <div ref={bottomRef} />
          </div>
        </div>
    )}

    <div className="sticky bottom-0 z-10 bg-[#212121] w-full p-4 ">
      <ChatInput onSubmit={handleUserSubmit} conversationOpen={conversationOpen} />
    </div>
    </div>
    <FeedbackDialog />
  </FeedbackProvider>
</StreamingContext.Provider>


  );
}