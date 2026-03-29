"use client"

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
    id: 1,
    testimonial: "Pehle customers phone pe poochte the ki website hai kya. Ab Google pe mil jaate hain direct. Enquiries tripled in first month.",
    name: "Rahul Verma",
    business: "Star Restaurant",
    location: "Lucknow",
    rating: 5,
    image: menImages[0],
    result: "3x Enquiries"
  },
  {
    id: 2,
    testimonial: "My clinic looks so professional now. Patients book appointments directly from the website. No more phone tag.",
    name: "Dr. Priya Sharma",
    business: "Skin Care Clinic",
    location: "Mumbai",
    rating: 5,
    image: womenImages[0],
    result: "Online Bookings"
  },
  {
    id: 3,
    testimonial: "Salon ka business 40% badh gaya after getting the website. Now I get bookings even at night when shop is closed.",
    name: "Meena Devi",
    business: "Glamour Beauty Parlour",
    location: "Jaipur",
    rating: 5,
    image: womenImages[1],
    result: "40% Growth"
  },
  {
    id: 4,
    testimonial: "Best investment for my coaching institute. Parents can see courses, fees, everything online. Trust factor increased.",
    name: "Vikram Singh",
    business: "Excel Academy",
    location: "Delhi",
    rating: 5,
    image: menImages[1],
    result: "Trust Built"
  },
  {
    id: 5,
    testimonial: "They made my photography portfolio look stunning. Now clients find me on Google and directly contact for weddings.",
    name: "Arjun Kapoor",
    business: "AK Photography",
    location: "Pune",
    rating: 5,
    image: menImages[2],
    result: "Google Leads"
  },
  {
    id: 6,
    testimonial: "My gym was losing to competitors with websites. Now members sign up online and I get enquiries from other cities too.",
    name: "Ravi Fitness",
    business: "PowerHouse Gym",
    location: "Bangalore",
    rating: 5,
    image: menImages[3],
    result: "Pan-city Reach"
  },
  {
    id: 7,
    testimonial: "CA practice mein credibility sabse important hai. Website ne mujhe professional look diya. Referrals increased significantly.",
    name: "CA Sunita Agarwal",
    business: "Agarwal & Associates",
    location: "Ahmedabad",
    rating: 5,
    image: womenImages[2],
    result: "More Referrals"
  },
  {
    id: 8,
    testimonial: "Small tailoring shop hai mera. Never thought website would help. But now I get orders from entire city, not just locality.",
    name: "Mohammed Iqbal",
    business: "Royal Tailors",
    location: "Hyderabad",
    rating: 5,
    image: menImages[4],
    result: "City-wide Orders"
  },
  {
    id: 9,
    testimonial: "Event planning is competitive. Having a portfolio website with past work made all the difference. Worth every rupee.",
    name: "Kavita Mehta",
    business: "Dream Events",
    location: "Chennai",
    rating: 5,
    image: womenImages[3],
    result: "More Clients"
  },
  {
    id: 10,
    testimonial: "They understood my yoga studio needs perfectly. Clean, calming design. Students can see schedule and book classes online.",
    name: "Deepika Nair",
    business: "Shanti Yoga Studio",
    location: "Kochi",
    rating: 5,
    image: womenImages[4],
    result: "Online Classes"
  },
  {
    id: 11,
    testimonial: "Hardware shop mein online dikhna important hai aaj kal. Customers check products before coming. Sales up by 30%.",
    name: "Santosh Yadav",
    business: "Yadav Hardware",
    location: "Varanasi",
    rating: 5,
    image: menImages[5],
    result: "30% Sales Up"
  },
  {
    id: 12,
    testimonial: "Real estate mein trust important hai. Website with all property listings gave me edge over other brokers in the area.",
    name: "Rajesh Tiwari",
    business: "Prime Properties",
    location: "Indore",
    rating: 5,
    image: menImages[6],
    result: "Competitive Edge"
  },
];

// Split into two rows for marquee
const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6, 12);

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <div 
      className={cn(
        "flex-shrink-0 w-[380px] p-6 rounded-2xl border transition-all duration-300",
        "bg-gradient-to-br from-white/[0.05] to-white/[0.02]",
        "border-white/10 hover:border-[#D8B4FE]/40",
        "hover:shadow-xl hover:shadow-[#D8B4FE]/5",
        "group"
      )}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-[#D8B4FE]/30 group-hover:text-[#D8B4FE]/60 transition-colors" />
      </div>
      
      {/* Testimonial Text */}
      <p className="text-neutral-300 text-[15px] leading-relaxed mb-5 min-h-[72px]">
        "{testimonial.testimonial}"
      </p>
      
      {/* Result Badge */}
      <div className="mb-5">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#5DDF18]/10 text-[#5DDF18] text-xs font-medium border border-[#5DDF18]/20">
          ✓ {testimonial.result}
        </span>
      </div>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D8B4FE]/30 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm truncate">
            {testimonial.name}
          </p>
          <p className="text-neutral-500 text-xs truncate">
            {testimonial.business}, {testimonial.location}
          </p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[#FF9132] text-[#FF9132]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function StaggerTestimonialsWebsiteBuilder() {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: scrollLeft 60s linear infinite;
        }
        .marquee-right {
          animation: scrollRight 60s linear infinite;
        }
        .marquee-left:hover, .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#D8B4FE] mb-3">
            Real Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Trusted by businesses across India
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From restaurants to clinics, salons to academies — see how businesses like yours transformed their online presence
          </p>
        </div>
        
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {[
            { value: "4.9★", label: "Average Rating" },
            { value: "35%", label: "Avg. Business Growth" },
            { value: "24hr", label: "Support Response" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Marquee Row 1 - Scrolls Left */}
      <div className="relative mb-6">
        <div className="flex gap-6 marquee-left" style={{ width: 'max-content' }}>
          {/* First set */}
          {row1.map((testimonial, idx) => (
            <TestimonialCard key={`r1-1-${testimonial.id}`} testimonial={testimonial} index={idx} />
          ))}
          {/* Duplicate for seamless loop */}
          {row1.map((testimonial, idx) => (
            <TestimonialCard key={`r1-2-${testimonial.id}`} testimonial={testimonial} index={idx} />
          ))}
        </div>
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
      </div>
      
      {/* Marquee Row 2 - Scrolls Right */}
      <div className="relative">
        <div className="flex gap-6 marquee-right" style={{ width: 'max-content' }}>
          {/* First set */}
          {row2.map((testimonial, idx) => (
            <TestimonialCard key={`r2-1-${testimonial.id}`} testimonial={testimonial} index={idx} />
          ))}
          {/* Duplicate for seamless loop */}
          {row2.map((testimonial, idx) => (
            <TestimonialCard key={`r2-2-${testimonial.id}`} testimonial={testimonial} index={idx} />
          ))}
        </div>
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
      </div>
      
      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 text-center">
        <p className="text-neutral-400 mb-4">Ready to be our next success story?</p>
        <a 
          href="#pricing" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8B4FE] text-black font-medium hover:bg-[#D8B4FE]/90 transition-colors"
        >
          Get Your Website <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
