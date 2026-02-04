"use client";

import Image from "next/image";
import { useState } from "react";

export type ProjectImage = {
  src: string | string[];
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
  const [erroredImages, setErroredImages] = useState<Set<string>>(new Set());

  const handleError = (imageKey: string) => {
    setErroredImages((prev) => new Set(prev).add(imageKey));
  };

  // Check if all images in an entry have errored
  const hasAllErrored = (image: ProjectImage, index: number) => {
    const srcs = Array.isArray(image.src) ? image.src : [image.src];
    return srcs.every((_, srcIndex) => erroredImages.has(`${index}-${srcIndex}`));
  };

  const visibleImages = images.filter((image, index) => !hasAllErrored(image, index));

  if (visibleImages.length === 0) {
    return (
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">What It Looks Like</h2>
        <div className="p-12 text-center border rounded-xl bg-muted/30">
          <p className="text-muted-foreground">Screenshots coming soon</p>
          <p className="mt-2 text-sm text-muted-foreground/60">
            Add images to /public/projects/ to display them here
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-semibold">What It Looks Like</h2>
      <div className="space-y-8">
        {images.map((image, index) => {
          if (hasAllErrored(image, index)) return null;

          const srcs = Array.isArray(image.src) ? image.src : [image.src];
          const visibleSrcs = srcs.filter(
            (_, srcIndex) => !erroredImages.has(`${index}-${srcIndex}`)
          );

          if (visibleSrcs.length === 0) return null;

          return (
            <figure key={index} className="group">
              <div className="mb-3 overflow-hidden border rounded-xl bg-muted/30">
                {visibleSrcs.length === 1 ? (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={visibleSrcs[0]}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      onError={() => handleError(`${index}-${srcs.indexOf(visibleSrcs[0])}`)}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {visibleSrcs.map((src, srcIndex) => (
                      <div key={srcIndex} className="relative aspect-[16/9]">
                        <Image
                          src={src}
                          alt={`${image.alt} - ${srcIndex + 1}`}
                          fill
                          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                          onError={() => handleError(`${index}-${srcs.indexOf(src)}`)}
                        />
                      </div>
                    ))}
                  </div>
                )}
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