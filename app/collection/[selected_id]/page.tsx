"use client";
import useCollectionById from "@/hook/get-collection-by-id";
import { useParams } from "next/navigation";
import { Calendar, Film, Sparkles } from "lucide-react";
import Link from "next/link";
import { IMAGE_BASE_URL } from "@/constants/tmdb";

export default function CollectionDetails() {
  const params = useParams();
  const id = Number(params.selected_id);
  const { data, isLoading, isError } = useCollectionById({ id });

  return (
    data && (
      <div className="min-h-screen bg-background space-y-10">
        <div className="relative overflow-hidden w-full flex justify-center items-end lg:h-[50vh] h-[50vh] ">
          <img
            src={`${IMAGE_BASE_URL}/original${data.backdrop_path}`}
            alt={data.name}
            className="absolute object-cover w-full h-full "
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
          <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background/60" />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl max-w-4xl mx-auto leading-tight ">
              {data.name}
            </h1>
            <h1 className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed line-clamp-5">
              {data.overview || "No description available."}
            </h1>
          </div>
        </div>

        {/* Movies Grid Section */}

        <div className="flex flex-wrap justify-center  items-center gap-4 max-w-7xl mx-auto py-10">
          {data.parts
            .filter((f) => f.poster_path)
            .map((movie) => (
              <div
                key={movie.id}
                className="group hover:-translate-y-2 transition-all duration-300 space-y-1.5 max-w-60  "
              >
                <Link href={`/details/movie/${movie.id}`}>
                  <div className="relative p-px  aspect-9/13 ">
                    <div className="absolute inset-0 bg-linear-to-t from-red-600 via-transparent to-transparent rounded-md group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                        alt={movie.title}
                        className="relative z-10 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
                <div>
                  <h1 className=" font-medium line-clamp-1">{movie.title}</h1>
                  <span className="text-sm text-muted-foreground">
                    {String(new Date(movie.release_date).getFullYear())}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  );
}
