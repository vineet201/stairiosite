"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = EmblaCarouselType | undefined;
type CarouselOptions = EmblaOptionsType;
type CarouselPlugin = EmblaPluginType[];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((emblaApi: CarouselApi) => {
      if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute right-3 top-1/2 h-14 w-14 -translate-y-1/2 overflow-hidden rounded-full border-0 bg-transparent p-0 text-white shadow-none hover:bg-transparent hover:text-white",
        className,
      )}
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    >
      <span className="absolute inset-0 rounded-full border border-white/16 bg-white/8 shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-md" />
      <span className="absolute inset-[1px] rounded-full bg-white/[0.04]" />
      <span className="relative z-10 flex items-center justify-center">
        <ArrowRight className="h-6 w-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" />
      </span>
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  features: string[];
  badge?: string;
}

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex min-h-[410px] w-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-neutral-900/80 to-neutral-950 transition-all duration-500 hover:border-white/[0.15] hover:shadow-2xl hover:shadow-white/5"
    >
      {service.badge && (
        <div className="absolute right-5 top-5 z-20">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${service.accent}, color-mix(in srgb, ${service.accent} 45%, white))`,
            }}
          >
            {service.badge}
          </span>
        </div>
      )}

      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

        <div
          className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${service.accent}, color-mix(in srgb, ${service.accent} 55%, #ff9132))`,
          }}
        >
          {service.number}
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 pt-5">
        <div>
          <h3 className="mb-1 text-xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 group-hover:bg-clip-text group-hover:text-transparent">
            {service.title}
          </h3>
          <p
            className="mb-4 text-sm font-medium"
            style={{
              color: service.accent,
            }}
          >
            {service.tagline}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-neutral-400">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-neutral-500">
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: service.accent,
                  }}
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
        }}
      />
    </motion.article>
  );
};

export function ServiceCarousel({ services }: { services: Service[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <Carousel
        ref={ref}
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.number} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ServiceCard service={service} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>

        <CarouselNext />
      </Carousel>
    </div>
  );
}
