import Image from "next/image";
import Link from "next/link";

import sketch2 from "@/imgs/sketch2.jpg";
import conceptRough from "@/imgs/ML_FL_conceptRough.jpg";
import img0746 from "@/imgs/IMG_0746.png";
import img0753 from "@/imgs/IMG_0753.png";
import haq from "@/imgs/HAQ-XFlXQAEvTaq.jpg";
import screenshot from "@/imgs/Screenshot_2024-12-28_at_10.33.41_PM.png";

const images = [
  { src: sketch2, alt: "Sketch", caption: "Daien & Ludi by Blaise_rmd" },
  { src: conceptRough, alt: "Concept rough", caption: "Daien & Ludi by Blaise_rmd" },
  { src: img0746, alt: "Concept art", caption: "Daien by blob_the_alien" },
  { src: img0753, alt: "Concept art", caption: "Ludi by blob_the_alien" },
  { src: haq, alt: "Character art", caption: "Daien by tutaime1" },
  { src: screenshot, alt: "Screenshot", caption: "Daien by my IRL friend" },
];

export default function ConceptArt() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <h1 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 mb-8">
          Concept Art
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
