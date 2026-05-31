"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

const features = [
  { name: "Direct Booking Engine", channel: "Ugly", ota: "No", stairio: "Modern and AI Ready" },
  { name: "Commission on Bookings", channel: "with charges", ota: "15-35%", stairio: "0% commission" },
  { name: "Same-Day Payment Settlement", channel: "No", ota: "No", stairio: "Yes" },
  { name: "Free Professional Website", channel: "No", ota: "No", stairio: "Yes" },
  { name: "Channel Manager Integration", channel: "Expensive", ota: "No", stairio: "value-priced" },
  { name: "Unified Dashboard", channel: "No", ota: "No", stairio: "Yes" },
  { name: "Guest Data Ownership", channel: "No", ota: "No", stairio: "Yes" },
  { name: "Automated Invoicing & GST", channel: "No", ota: "No", stairio: "Yes" },
  { name: "Real-time Analytics", channel: "No", ota: "Yes", stairio: "Yes" },
  { name: "Multi-property Support", channel: "No", ota: "Yes", stairio: "Yes" },
  { name: "WhatsApp Notifications", channel: "No", ota: "No", stairio: "Yes" },
  { name: "24/7 Dedicated Support", channel: "No", ota: "No", stairio: "Yes" },
  { name: "App Support", channel: "No", ota: "Yes", stairio: "Yes" },
  { name: "Mobile Friendly Website", channel: "No", ota: "No", stairio: "Yes" },
]

const plans = [
  {
    name: "Channel Manager",
    level: "channel",
  },
  {
    name: "Managing via OTA",
    level: "ota",
  },
  {
    name: "With Hotelify",
    level: "stairio",
    popular: true,
  },
]

export function CompareTable() {
  return <PricingTable features={features} plans={plans} />
}

type PlanLevel = "channel" | "ota" | "stairio" | string

interface PricingFeature {
  name: string
  channel: string
  ota: string
  stairio: string
}

interface PricingPlan {
  name: string
  level: PlanLevel
  popular?: boolean
}

interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
}

export function PricingTable({ features, plans, ...props }: PricingTableProps) {
  return (
    <section className="-mx-4 overflow-x-auto px-4 pb-2">
      <div className="min-w-[720px] border-x border-white/10" {...props}>
        <div className="divide-y divide-white/10 last:border-b last:border-white/10">
          <div className="sticky top-20 z-10 mt-2 flex items-center border-t border-white/10 bg-[#0A0A0A] pl-6">
            <div className="flex-1 text-sm font-medium text-neutral-400">Features</div>
            <div className="flex items-center text-sm">
              {plans.map((plan) => (
                <div
                  key={plan.level}
                  className={cn(
                    "w-32 border-r border-white/10 p-4 text-center font-medium first:border-l first:border-white/10 last:border-0 md:w-44 md:p-6 lg:w-56",
                    plan.popular 
                      ? "bg-[#D8B4FE]/10 text-[#D8B4FE]" 
                      : "text-neutral-300"
                  )}
                >
                  {plan.name}
                </div>
              ))}
            </div>
          </div>

          {features.map((feature) => (
            <div
              key={feature.name}
              className={cn("flex items-center pl-6 transition-colors hover:bg-white/[0.02]")}
            >
              <div className="flex-1 pr-4 text-sm text-neutral-300">{feature.name}</div>
              <div className="flex items-center text-sm">
                {plans.map((plan) => {
                  const value = feature[plan.level as keyof Pick<PricingFeature, 'channel' | 'ota' | 'stairio'>]
                  return (
                    <div
                      key={plan.level}
                      className={cn(
                        "flex w-32 justify-center border-r border-white/10 py-5 first:border-l first:border-white/10 last:border-0 md:w-44 lg:w-56",
                        plan.popular && "bg-[#D8B4FE]/[0.03]"
                      )}
                    >
                      {renderCellValue(value, plan.popular)}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderCellValue(value: string, isPopular?: boolean): React.ReactNode {
  const lowerValue = value.toLowerCase()
  
  if (lowerValue === "yes") {
    return <Check className="h-5 w-5 text-[#5DDF18]" />
  }
  
  if (lowerValue === "no") {
    return <X className="h-5 w-5 text-red-500/70" />
  }
  
  // Custom text value - show as text with appropriate styling
  const isNegative = ["ugly", "expensive", "with charges"].some(neg => lowerValue.includes(neg)) || lowerValue.includes("%")
  
  return (
    <span className={cn(
      "text-xs text-center px-2",
      isPopular ? "text-[#5DDF18] font-medium" : isNegative ? "text-red-400/80" : "text-neutral-400"
    )}>
      {value}
    </span>
  )
}
