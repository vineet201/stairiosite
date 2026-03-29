"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SQRT_5000 = Math.sqrt(5000);

// Image paths for men and women
const menImages = [
  "/images/randomprople/men/6.jpg",
  "/images/randomprople/men/7.jpg",
  "/images/randomprople/men/9.jpg",
  "/images/randomprople/men/12.jpg",
  "/images/randomprople/men/45.jpg",
  "/images/randomprople/men/47.jpg",
  "/images/randomprople/men/48.jpg",
  "/images/randomprople/men/50.jpg",
  "/images/randomprople/men/58.jpg",
  "/images/randomprople/men/65.jpg",
  "/images/randomprople/men/76.jpg",
];

const womenImages = [
  "/images/randomprople/women/8.jpg",
  "/images/randomprople/women/17.jpg",
  "/images/randomprople/women/37.jpg",
  "/images/randomprople/women/39.jpg",
  "/images/randomprople/women/57.jpg",
  "/images/randomprople/women/84.jpg",
  "/images/randomprople/women/85.jpg",
];

const testimonials = [
  {
    tempId: 0,
    testimonial: "Pehle customers phone pe poochte the ki website hai kya. Ab Google pe mil jaate hain direct. Enquiries tripled in first month.",
    by: "Rahul Verma, Star Restaurant, Lucknow",
    image: menImages[0]
  },
  {
    tempId: 1,
    testimonial: "My clinic looks so professional now. Patients book appointments directly from the website. No more phone tag.",
    by: "Dr. Priya Sharma, Skin Care Clinic, Mumbai",
    image: womenImages[0]
  },
  {
    tempId: 2,
    testimonial: "Salon ka business 40% badh gaya after getting the website. Now I get bookings even at night when shop is closed.",
    by: "Meena Devi, Glamour Beauty Parlour, Jaipur",
    image: womenImages[1]
  },
  {
    tempId: 3,
    testimonial: "Best investment for my coaching institute. Parents can see courses, fees, everything online. Trust factor increased.",
    by: "Vikram Singh, Excel Academy, Delhi",
    image: menImages[1]
  },
  {
    tempId: 4,
    testimonial: "They made my photography portfolio look stunning. Now clients find me on Google and directly contact for weddings.",
    by: "Arjun Kapoor, AK Photography, Pune",
    image: menImages[2]
  },
  {
    tempId: 5,
    testimonial: "My gym was losing to competitors with websites. Now members sign up online and I get enquiries from other cities too.",
    by: "Ravi Fitness, PowerHouse Gym, Bangalore",
    image: menImages[3]
  },
  {
    tempId: 6,
    testimonial: "CA practice mein credibility sabse important hai. Website ne mujhe professional look diya. Referrals increased significantly.",
    by: "CA Sunita Agarwal, Agarwal & Associates, Ahmedabad",
    image: womenImages[2]
  },
  {
    tempId: 7,
    testimonial: "Small tailoring shop hai mera. Never thought website would help. But now I get orders from entire city, not just locality.",
    by: "Mohammed Iqbal, Royal Tailors, Hyderabad",
    image: menImages[4]
  },
  {
    tempId: 8,
    testimonial: "Event planning is competitive. Having a portfolio website with past work made all the difference. Worth every rupee.",
    by: "Kavita Mehta, Dream Events, Chennai",
    image: womenImages[3]
  },
  {
    tempId: 9,
    testimonial: "They understood my yoga studio needs perfectly. Clean, calming design. Students can see schedule and book classes online.",
    by: "Deepika Nair, Shanti Yoga Studio, Kochi",
    image: womenImages[4]
  },
  {
    tempId: 10,
    testimonial: "Hardware shop mein online dikhna important hai aaj kal. Customers check products before coming. Sales up by 30%.",
    by: "Santosh Yadav, Yadav Hardware, Varanasi",
    image: menImages[5]
  },
  {
    tempId: 11,
    testimonial: "Real estate mein trust important hai. Website with all property listings gave me edge over other brokers in the area.",
    by: "Rajesh Tiwari, Prime Properties, Indore",
    image: menImages[6]
  },
];

interface Point2D {
  x: number;
  y: number;
}

// Generate points along an Archimedean spiral for smooth flow
function generateSpiralPoints(count: number, cx: number, cy: number): Point2D[] {
  const points: Point2D[] = [];
  const a = 30;
  const b = 12;
  const angleStep = 0.6;
  
  for (let i = 0; i < count; i++) {
    const angle = i * angleStep;
    const r = a + b * angle;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push({ x, y });
  }
  
  return points;
}

export function StaggerTestimonialsWebsiteBuilder() {
  const [positions, setPositions] = useState<Point2D[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = 300;
    const initialPositions = generateSpiralPoints(testimonials.length, centerX, centerY);
    setPositions(initialPositions);
    setIsInitialized(true);
  }, []);

  const handlePrev = () => {
    setPositions((prev) => {
      const newPositions = [...prev];
      const last = newPositions.pop()!;
      newPositions.unshift(last);
      return newPositions;
    });
  };

  const handleNext = () => {
    setPositions((prev) => {
      const newPositions = [...prev];
      const first = newPositions.shift()!;
      newPositions.push(first);
      return newPositions;
    });
  };

  if (!isInitialized) {
    return (
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              Trusted by businesses across India
            </h2>
            <p className="text-neutral-400 text-lg">
              See what our clients are saying
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Trusted by businesses across India
          </h2>
          <p className="text-neutral-400 text-lg">
            See what our clients are saying
          </p>
        </div>

        {/* Spiral Container */}
        <div 
          className="relative mx-auto overflow-visible"
          style={{ height: '600px', width: '100%' }}
        >
          {testimonials.map((testimonial, idx) => {
            const pos = positions[idx];
            if (!pos) return null;

            const distFromCenter = Math.sqrt(
              Math.pow(pos.x - window.innerWidth / 2, 2) +
              Math.pow(pos.y - 300, 2)
            );
            const normalizedDist = Math.min(distFromCenter / SQRT_5000, 1);
            const scale = 1 - normalizedDist * 0.6;
            const opacity = 1 - normalizedDist * 0.7;
            const zIndex = Math.round((1 - normalizedDist) * 100);

            return (
              <div
                key={testimonial.tempId}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={cn(
                    'w-72 p-5 rounded-2xl border transition-all duration-300',
                    activeIndex === idx
                      ? 'bg-white/10 border-[#D8B4FE]/50 shadow-xl shadow-[#D8B4FE]/10'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  )}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D8B4FE]/30 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.by}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">
                        {testimonial.by.split(',')[0]}
                      </p>
                      <p className="text-[10px] text-neutral-500 truncate">
                        {testimonial.by.split(',').slice(1).join(',')}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
