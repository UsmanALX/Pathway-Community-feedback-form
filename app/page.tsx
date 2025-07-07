"use client";

import { useState } from "react";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { Card, CardContent } from "@/app/ui/card";
import { Copy } from "lucide-react";

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      const textArea = document.createElement("textarea");
      textArea.value = generatedLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Jotform Link Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate custom Jotform links for your events
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Name
                </label>
                <Input
                  type="text"
                  placeholder="e.g., CommunityMeetup"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Date
                </label>
                <Input
                  type="text"
                  placeholder="e.g., April082025"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <Input
                  type="text"
                  placeholder="e.g., OnlineEvent"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full"
                />
              </div>

              <Button onClick={handleGenerate} className="w-full" size="lg">
                Generate Link
              </Button>
            </div>

            {generatedLink && (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Generated Link
                    </h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="text-green-700 border-green-300 hover:bg-green-100"
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-green-700 border-green-300 hover:bg-green-100"
                      >
                        <a
                          href={generatedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="text-sm text-gray-600 break-all">
                      {generatedLink}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
