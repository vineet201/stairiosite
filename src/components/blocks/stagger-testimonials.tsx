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
    testimonial: "We were paying 18% commission to OTAs. Now with direct bookings, we keep everything. Best decision we made.",
    by: "Rajesh Sharma, Hotel Sunrise, Jaipur",
    image: menImages[0]
  },
  {
    tempId: 1,
    testimonial: "Got a free website worth 33k plus booking engine. Support team is very responsive and helpful.",
    by: "Priya Patel, The Comfort Inn, Ahmedabad",
    image: womenImages[0]
  },
  {
    tempId: 2,
    testimonial: "My staff used to manage everything in Excel sheets. Now the dashboard handles it all in 2 minutes. So easy.",
    by: "Sunil Verma, Hotel Grand Palace, Udaipur",
    image: menImages[1]
  },
  {
    tempId: 3,
    testimonial: "Same day payment settlement. Earlier we had to wait 15 days for OTA payouts. Cash flow problem solved.",
    by: "Meena Devi, Lakshmi Guest House, Varanasi",
    image: womenImages[1]
  },
  {
    tempId: 4,
    testimonial: "Mere resort ke liye custom features banaye inhone. Jo manga woh mila. Very professional team.",
    by: "Arjun Reddy, Coastal Retreat, Goa",
    image: menImages[2]
  },
  {
    tempId: 5,
    testimonial: "Double booking was a nightmare for us. After installing channel manager, not a single issue. Works perfectly.",
    by: "Kavita Singh, Hotel Moonlight, Rishikesh",
    image: womenImages[2]
  },
  {
    tempId: 6,
    testimonial: "Invoices generate automatically with GST. Filing has become so easy now. Even my accountant is happy.",
    by: "Vikram Malhotra, Business Stay, Gurugram",
    image: menImages[3]
  },
  {
    tempId: 7,
    testimonial: "Small hotel hai mera, 12 rooms. Pehle socha afford nahi kar paunga. But pricing is very reasonable.",
    by: "Mohammed Iqbal, Al-Madina Lodge, Hyderabad",
    image: menImages[4]
  },
  {
    tempId: 8,
    testimonial: "Guests can login with Google and leave reviews directly. Our property looks very professional now.",
    by: "Anita Joshi, Heritage Haveli, Jodhpur",
    image: womenImages[3]
  },
  {
    tempId: 9,
    testimonial: "Been using it for 6 months now. Not a single server downtime. The system is extremely reliable.",
    by: "Deepak Nair, Backwater Villa, Kochi",
    image: menImages[5]
  },
  {
    tempId: 10,
    testimonial: "I can manage everything from my phone. Even check from home who checked in and who left.",
    by: "Santosh Yadav, Hotel Bharat, Lucknow",
    image: menImages[6]
  },
  {
    tempId: 11,
    testimonial: "Unke team ne 5 din mein sab setup kar diya. Training bhi di. Transition was very smooth.",
    by: "Rekha Menon, Spice Garden Resort, Munnar",
    image: womenImages[4]
  },
  {
    tempId: 12,
    testimonial: "Our direct bookings increased by 40% in just 3 months. The commission we save is pure profit now.",
    by: "Harsh Agarwal, City Central Hotel, Indore",
    image: menImages[7]
  },
  {
    tempId: 13,
    testimonial: "Housekeeping assignments are automatic now. Staff knows exactly which room needs cleaning.",
    by: "Sunita Kumari, Hotel Comfort Zone, Patna",
    image: womenImages[5]
  },
  {
    tempId: 14,
    testimonial: "Analytics tells me which season is busy. I adjust my rates accordingly. Very useful feature.",
    by: "Ravi Krishnan, Sea Breeze Inn, Chennai",
    image: menImages[8]
  },
  {
    tempId: 15,
    testimonial: "Guest data stays with us. I can send special offers directly to repeat customers. Big advantage.",
    by: "Pooja Saxena, Mountain View Hotel, Shimla",
    image: womenImages[6]
  },
  {
    tempId: 16,
    testimonial: "OTA pe depend tha puri tarah. Ab 60% booking direct aata hai. Finally got independence.",
    by: "Nitin Deshmukh, Hotel Sahara, Pune",
    image: menImages[9]
  },
  {
    tempId: 17,
    testimonial: "WhatsApp booking confirmations go automatically. Guests find it very professional.",
    by: "Geeta Pillai, Tranquil Stay, Trivandrum",
    image: womenImages[0]
  },
  {
    tempId: 18,
    testimonial: "Pehle 3 software use karta tha. Ab sab ek jagah. Time bhi bachta hai, paisa bhi.",
    by: "Amit Tiwari, Royal Residency, Bhopal",
    image: menImages[10]
  },
  {
    tempId: 19,
    testimonial: "Support team replies even at night. Once I had an issue at 11 PM, solved in 15 minutes.",
    by: "Lakshmi Iyer, Temple View Inn, Madurai",
    image: womenImages[1]
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div 
        className="mb-4 h-12 w-12 rounded-lg overflow-hidden"
        style={{
          boxShadow: isCenter 
            ? "0 2px 8px rgba(139, 92, 246, 0.4)" 
            : "0 2px 8px rgba(0, 0, 0, 0.3)"
        }}
      >
        <Image 
          src={testimonial.image} 
          alt={testimonial.by.split(',')[0]} 
          width={48} 
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">Trusted by Number of Teams</h2>
        <p className="text-neutral-400 text-lg">See What Our Customers have to say about us</p>
      </div>
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 600 }}
      >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
    </section>
  );
};
