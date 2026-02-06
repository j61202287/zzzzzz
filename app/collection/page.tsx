"use client";

import { AnimatePresence, motion } from "motion/react";

import Link from "next/link";

import { useState } from "react";

import { IMAGE_BASE_URL } from "@/constants/tmdb";

export default function Collections() {
  const COLLECTION_LIST = [
    {
      id: 8650,
      name: "Transformers Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/nnFgBA6nR0pHorxdFaDvdY4nVHL.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/vu9YHfFMmyNcOqDmgK1Dnuj3klL.jpg",
    },
    {
      id: 1565,
      name: "28 Days/Weeks/Years Later Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/ysloz8CNAO1wJytRbmzn1NQ7W6S.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/1Oj1Dh0kj0OiTG8DKU6ujIlGskt.jpg",
    },
    {
      id: 119,
      name: "The Lord of the Rings Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/oENY593nKRVL2PnxXsMtlh8izb4.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/sxyPBfYB9REym89Cj8ZkgXMS7eW.jpg",
    },
    {
      id: 386382,
      name: "Frozen Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/rpoXnE9UzCbjmINhxIi8bZF557B.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/6eGlZVFN7rN8UFAaWHg03j3r1ue.jpg",
    },
    {
      id: 10,
      name: "Star Wars Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/22dj38IckjzEEUZwN1tPU5VJ1qq.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/itH1Wlzwf6yTNa7fVkYMVUwXlhR.jpg",
    },
    {
      id: 86066,
      name: "Despicable Me Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/anN6OtIlsrJJGKbrKYGsByC6OH5.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/u1gznToB6Cg9kXUCzIXRqBK1Zdv.jpg",
    },
    {
      id: 131635,
      name: "The Hunger Games Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/fPer2U4uQT1dkXTUWODDaLECWoW.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/vLxlGijhwlM0R1LFfAT6jC1rKDt.jpg",
    },
    {
      id: 89137,
      name: "How to Train Your Dragon Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/jkC6nE9Wzqxt77oSxlYtgIAOzhu.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/hCNrHPh34fEeK3Okc1Hdyb4xP0d.jpg",
    },

    {
      id: 2316,
      name: "The Avengers Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/5LkXlUPrRuhMAeVugr1xXcsZbV8.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/6Ho6Qg9DpSaOLr3OLgaHUYtlA6j.jpg",
    },
    {
      id: 263,
      name: "The Dark Knight Trilogy",
      poster_path:
        "https://image.tmdb.org/t/p/original/rN2Qld2RAtSxxVVkKSDF1lbOz1s.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/2mehgnW5ijYEntfu0VTI5FcDK3x.jpg",
    },
    {
      id: 328,
      name: "Jurassic World Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/2EmqHqoAbAIIls50CT4wHSMtV2Q.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/51qIO2EhYWIUtjWbBymgUrapz4j.jpg",
    },
    {
      id: 87096,
      name: "Avatar Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/yqayiDD4OFQkpDzny6NEDD1I3up.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/syGPZuzcHBBHMLiNDN0x0Tms4Fk.jpg",
    },
    {
      id: 2150,
      name: "Shrek Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/qNHZMe92A7Pyl46qUH29hVOtbSK.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/qus19XUIHhz23a5K1dDaq5q7Cgr.jpg",
    },
    {
      id: 8945,
      name: "Mad Max Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/tRxkZboyyXnFgCthoViWBwISZ0r.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/fZXrxmu6WwK3Q2itkIz336OjWpd.jpg",
    },
    {
      id: 295,
      name: "Pirates of the Caribbean Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/qTPYCuvSWmdYhsXBgAouNQhyKa.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/t4Q0DmiHlqY6k5jAEzOKGPBpylL.jpg",
    },
    {
      id: 2344,
      name: "The Matrix Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/9zzxyavBzVq5rlmSemZ0AHXutjJ.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/fj37PDPrFHRopa72KyhkYggzMgv.jpg",
    },
    {
      id: 10194,
      name: "Toy Story Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/7G9915LfUQ2lVfwMEEhDsn3kT4B.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/evFUMr5F8Qq1nHUSYnhsHyIWoCp.jpg",
    },
    {
      id: 544669,
      name: "Minions Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/9Ul4YrDQAKfkOf8TpV2RrjeLmaI.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/mkioOqxtHc09nj3u6DyZ93HdGVr.jpg",
    },
    {
      id: 77816,
      name: "Kung Fu Panda Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/2QT6PuYXY0T2Ry9rX0JKQYTrbwx.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/8rC0XeZHB9JLYeSA8IHQtQa8rlm.jpg",
    },
    {
      id: 468222,
      name: "The Incredibles Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/iOz4Zz72JIqkuTXSnbvNoloA6oD.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/8ls2yTRmhfK51giuARBUuicT6kL.jpg",
    },
    {
      id: 427084,
      name: "The Secret Life of Pets Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/d83LVydlQonKdshwQyLYx48D3LH.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/lB4l8H0jgPp2bf4NV2aZPIyytdQ.jpg",
    },
    {
      id: 8354,
      name: "Ice Age Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/xF3SMXZbPUrjpZ7GbF2JiB7pOxC.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/ebwed1AK5SfMRBTu1ifRUviosu0.jpg",
    },
    {
      id: 87118,
      name: "Cars Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/uq3N2SFj1Y06zA6LzCQPkmBdaaE.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/yCfXHlXIIVi9gfX6FjiBPKNtw8I.jpg",
    },
    {
      id: 137697,
      name: "Finding Nemo Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/cCovtlN16ykvyFYnzKyv3dFtceG.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/jWWmQkXvaNuP4hKcrrVFySL8nHC.jpg",
    },
    {
      id: 528,
      name: "The Terminator Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/kpZxdNsAV7qTdTLwKM5NLqa7GEo.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/wOCwhWyQfb7FwJet87Werh00yT9.jpg",
    },
    {
      id: 230,
      name: "The Godfather Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/zVb22YOMgljCEYbXlvCvEiN4VwT.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/cXXaMG7r8oD018hcYUCMu5fiaJ4.jpg",
    },

    {
      id: 1930,
      name: "The Amazing Spider-Man Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/68CqVxCH14br7EHFu67peDDjZX9.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/3W9F1P02LjZMYPGc8YwKtnZqK6O.jpg",
    },
    {
      id: 556,
      name: "Spider-Man Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/2QFOLSlntyt2n4ReF5MrKX3phub.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/iIKOzyArPxXhK45tqIJzkUdbCs.jpg",
    },
    {
      id: 325470,
      name: "The Lego Movie Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/qwuwukEjuh6Zs51NnhtPVriARey.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/35wqrUpVaC8ulFHdAhKx7GUGKYY.jpg",
    },
    {
      id: 9485,
      name: "The Fast & Furious Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/zOCnMPoUxgJK1RFPfN4PcnT16gr.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/y81mrypQCQqY0YtGihxdHF8pzuw.jpg",
    },

    {
      id: 86055,
      name: "Men in Black Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/rWcgZaoJ0nxTFRn0H6w9bdtoDUI.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/9IFKJOrYEqYRvwHM4H5itM2Vgr1.jpg",
    },
    {
      id: 8091,
      name: "Alien Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/gWFHIY77cRVoBRGERwMHqpD27gc.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/2S3TM8ASGT61Fh08bfH5uQemEuK.jpg",
    },
    {
      id: 399,
      name: "Predator Collection",
      poster_path:
        "https://image.tmdb.org/t/p/original/mm2t5dd1QFxtX6X56Z9U5ucsIb1.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/ogePiUqMs00dhISFwCN0qFjD81l.jpg",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="lg:w-[85%] py-25  w-[95%]   mx-auto">
      <div className="space-y-4">
        <h1 className=" uppercase  mask-[linear-gradient(to_bottom,black_0%,transparent_85%)] lg:text-6xl text-5xl font-bold text-red-700  translate-y-3 tracking-tight ">
          COLLECTION
        </h1>
        <div className="grid gap-3 lg:grid-cols-5 grid-cols-2">
          {COLLECTION_LIST.map((meow, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: idx * 0.03,
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="relative group overflow-hidden rounded-md active:scale-98"
            >
              <Link href={`/collection/${meow.id}`}>
                <div className="relative  p-px rounded-md bg-linear-to-b group-hover:to-red-800 from-transparent   transition duration-150 overflow-hidden">
                  <div className="aspect-video   rounded-md  transition cursor-pointer overflow-hidden relative ">
                    <img
                      src={`${IMAGE_BASE_URL}/w780${meow.backdrop_path}`}
                      alt={meow.name}
                      className={`w-full h-full object-cover transition-opacity duration-300  ${loaded ? "opacity-100 " : "opacity-0"}`}
                      onLoad={() => setLoaded(true)}
                    />

                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/50 opacity-0 group-hover:opacity-100 transition duration-150"></div>
                  </div>
                </div>
                <div className="mt-2 space-y-2">
                  <h1 className="lg:text-sm text-xs  font-normal truncate">
                    {meow.name}
                  </h1>
                </div>
              </Link>{" "}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
