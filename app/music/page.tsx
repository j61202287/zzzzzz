"use client";

import { Input } from "@/components/ui/input";
import useMusicSearch from "@/hook-music/search";
import useMusicSource from "@/hook-music/source";
import { useState } from "react";
import AudioPlayer from "./dash";

export default function MusicSearch() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState<number | null>(null);

  const { data: search_result } = useMusicSearch({ search });
  const { data: source, isLoading } = useMusicSource({ id });

  return (
    <div className="py-30 w-[85%] mx-auto">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search music..."
      />

      {/* Player */}
      {source?.data?.manifest && (
        <div className="mt-6">
          <AudioPlayer
            manifestBase64={source.data.manifest}
            manifestMimeType={source.data.manifestMimeType}
          />
        </div>
      )}

      {/* Results */}
      <div className="divide-y mt-10">
        {search_result?.data.items.map((m) => (
          <button
            key={m.id}
            onClick={() => setId(m.id)}
            className="py-4 w-full text-left hover:bg-muted px-2 rounded"
          >
            <div className="font-medium">
              {m.title}
              {id === m.id && " ▶️"}
            </div>
            <div className="text-sm text-muted-foreground">
              {m.artist.name} - {m.version}
            </div>
          </button>
        ))}
      </div>

      {isLoading && <p className="mt-4 text-sm">Loading audio…</p>}
    </div>
  );
}
