"use client";
import { useState } from "react";

export default function JotformLinkGenerator() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleGenerate = () => {
    const formattedEventName = eventName.trim().replace(/\s+/g, "");
    const formattedDate = eventDate.trim().replace(/\s+/g, "");
    const formattedType = eventType.trim().replace(/\s+/g, "");
    const combined = `${formattedEventName}%20${formattedDate}%20${formattedType}`;
    const url = `https://sandtech.jotform.com/250711619462556?event=${combined}`;
    setGeneratedLink(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Jotform Link Generator</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Event Name (e.g. CommunityMeetup)"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Event Date (e.g. April082025)"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Event Type (e.g. OnlineEvent)"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Generate Link
        </button>
      </div>
      
      {generatedLink && (
        <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-sm text-gray-500 mb-2">Generated Link:</p>
          <div className="flex items-center space-x-2">
            <a
              href={generatedLink}
              className="text-blue-600 underline break-all flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generatedLink}
            </a>
            <button
              onClick={handleCopy}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        </div>
      )}
    </div>
  );
}