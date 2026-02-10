"use client";

import { useEffect, useRef } from "react";
import * as dashjs from "dashjs";

interface Props {
  manifestBase64: string;
  manifestMimeType: string;
}

export default function AudioPlayer({
  manifestBase64,
  manifestMimeType,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!manifestBase64 || !audioRef.current) return;

    // Decode Base64
    const decoded = atob(manifestBase64);

    if (manifestMimeType.includes("dash+xml")) {
      // DASH HI-RES
      const player = dashjs.MediaPlayer().create();
      player.initialize(
        audioRef.current,
        URL.createObjectURL(
          new Blob([decoded], { type: "application/dash+xml" }),
        ),
        true,
      );
    } else if (manifestMimeType.includes("bts")) {
      // LOSSLESS FLAC
      try {
        const flacJson = JSON.parse(decoded);
        const flacUrl = flacJson.urls?.[0];
        if (flacUrl) audioRef.current.src = flacUrl;
      } catch (err) {
        console.error("Failed to parse BTS manifest:", err);
      }
    }
  }, [manifestBase64, manifestMimeType]);

  return <audio ref={audioRef} controls className="w-full rounded" />;
}
