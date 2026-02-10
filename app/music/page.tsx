"use client";

import { Input } from "@/components/ui/input";
import useMusicSearch from "@/hook-music/search";
import useMusicSource from "@/hook-music/source";
import { useState } from "react";
import AudioPlayer from "./dash";

export default function MusicSearch() {
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState<{
    id: number | null;
    title: string | null;
    artist: string | null;
    cover: string | null;
  }>({
    id: null,
    title: null,
    artist: null,
    cover: null,
  });

  const { data: search_result } = useMusicSearch({ search });
  const { data: source, isLoading } = useMusicSource({ id: playing.id });

  return (
    <div className="relative py-30 lg:w-[85%] w-[95%] mx-auto">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search music..."
      />

      {/* Player */}
      {source?.data?.manifest && (
        <AudioPlayer
          manifestBase64={source.data.manifest}
          manifestMimeType={source.data.manifestMimeType}
          title={playing.title}
          artist={playing.artist}
          cover={playing.cover}
        />
      )}

      {/* Results */}
      <div className="divide-y mt-10 grid grid-cols-2">
        {search_result?.data.items.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setPlaying({
                id: m.id,
                title: m.title,
                artist: m.artist.name,
                cover: m.album.cover
                  ? `https://resources.tidal.com/images/${m.album.cover.replace(/-/g, "/")}/320x320.jpg`
                  : null,
              });
            }}
            className="py-4 w-full text-left hover:bg-muted px-2 rounded flex items-end gap-3"
          >
            {m.album.cover && (
              <div className="size-15 overflow-hidden rounded-sm">
                <img
                  src={`https://resources.tidal.com/images/${m.album.cover.replace(/-/g, "/")}/320x320.jpg`}
                  alt={m.album.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-medium">
                {m.title}
                <span className="text-muted-foreground italic">
                  {playing.id === m.id && `  -  Playing`}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {m.artist.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      {isLoading && <p className="mt-4 text-sm">Loading audio…</p>}
    </div>
  );
}
