"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export function ProjectHeroImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-muted to-muted/50">
        <p className="text-sm text-muted-foreground">Screenshot coming soon</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority
      onError={() => setHasError(true)}
    />
  );
}

export function ProjectImageGallery({ images }: { images: ProjectImage[] }) {
  const [erroredImages, setErroredImages] = useState<Set<number>>(new Set());

  const handleError = (index: number) => {
    setErroredImages((prev) => new Set(prev).add(index));
  };

  // Filter out images that have errors
  const visibleImages = images.filter((_, index) => !erroredImages.has(index));

  if (visibleImages.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">What It Looks Like</h2>
        <div className="rounded-xl border bg-muted/30 p-12 text-center">
          <p className="text-muted-foreground">Screenshots coming soon</p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Add images to /public/projects/ to display them here
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">What It Looks Like</h2>
      <div className="space-y-8">
        {images.map((image, index) => {
          if (erroredImages.has(index)) return null;

          return (
            <figure key={index} className="group">
              <div className="rounded-xl overflow-hidden border bg-muted/30 mb-3">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={() => handleError(index)}
                  />
                </div>
              </div>
              <figcaption className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {image.caption.split("—")[0]}
                </span>
                {image.caption.includes("—") && (
                  <span>— {image.caption.split("—")[1]}</span>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
