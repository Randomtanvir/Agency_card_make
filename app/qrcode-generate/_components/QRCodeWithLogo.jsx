"use client";

import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

export default function StyledQRCode() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);
  const qrCode = useRef(null);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: 1080,
      height: 1080,
      margin: 5,
      // data: "https://example.com", // default data
      image: "/logo.png", // place logo in /public/logo.png
      imageOptions: {
        crossOrigin: "anonymous",
        imageSize: 0.6,
        margin: 3,
      },
      dotsOptions: {
        type: "rounded",
        
        gradient: {
          type: "linear",
          rotation: 0,
          colorStops: [
            { offset: 0, color: "#f02222" },
            { offset: 1, color: "#000000" },
          ],
        },

      
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#e60000",
      },
      cornersDotOptions: {
        type: "dot",
        color: "#000000",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
    });

    qrCode.current.append(qrRef.current);
  }, []);

  const handleGenerate = () => {
    if (!text || !qrCode.current) return;
    qrCode.current.update({ data: text });
  };

  const handleDownload = () => {
    qrCode.current.download({
      name: "qr-code",
      extension: "png",
      quality: 1.0,
      width: 3840,
      height: 3840,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full space-y-6 text-center">
        <h1 className="text-2xl font-bold">Generate Styled QR Code</h1>
        <input
          type="text"
          placeholder="Enter URL or text"
          className="w-full p-2 border rounded-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Generate QR Code
        </button>
        <div className="flex justify-center items-center">
          <div ref={qrRef} className="mx-auto mt-4" />
        </div>
        <button
          onClick={handleDownload}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
}
