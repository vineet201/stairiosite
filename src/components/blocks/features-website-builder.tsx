// Custom SVG Icons for Website Builder - Professional, minimal line icons
const DesignIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <circle cx="6" cy="6" r="0.75" fill="#D8B4FE" stroke="none" />
        <circle cx="9" cy="6" r="0.75" fill="#D8B4FE" stroke="none" />
    </svg>
)

const MobileIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
    </svg>
)

const SEOIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
    </svg>
)

const SpeedIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
)

const ConversionIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
)

const SupportIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <circle cx="9" cy="10" r="0.75" fill="#D8B4FE" stroke="none" />
        <circle cx="12" cy="10" r="0.75" fill="#D8B4FE" stroke="none" />
        <circle cx="15" cy="10" r="0.75" fill="#D8B4FE" stroke="none" />
    </svg>
)

const TransparentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
    </svg>
)

const HostingIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="6" rx="1" />
        <rect x="2" y="15" width="20" height="6" rx="1" />
        <path d="M6 6h.01M6 18h.01" />
        <circle cx="6" cy="6" r="0.75" fill="#D8B4FE" stroke="none" />
        <circle cx="6" cy="18" r="0.75" fill="#D8B4FE" stroke="none" />
    </svg>
)

const DomainIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
)

export function FeaturesWebsiteBuilder() {
    return (
        <section className="pt-12 pb-12 md:pt-16 md:pb-20 bg-black">
            <div className="mx-auto max-w-6xl space-y-10 px-6 md:space-y-14">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">The Stairio Difference</h2>
                    <p className="mt-4 text-neutral-400 text-lg">What sets us apart from typical web agencies</p>
                </div>

                <div className="relative mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <DesignIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Modern, Mobile-First Design</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Clean, fast-loading websites optimized for mobile devices. 70% of your visitors are on phones — we design for them first.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF9132]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF9132]/10 border border-[#FF9132]/20">
                                    <SEOIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">SEO & Speed Optimized</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Built with search engines in mind. We optimize every page for visibility so customers can find you on Google.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDF18]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5DDF18]/10 border border-[#5DDF18]/20">
                                    <ConversionIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Conversion-Focused Layout</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Every element is designed to turn visitors into customers. Clear CTAs, trust signals, and strategic placement.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <SupportIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Dedicated Support</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Real people who help when you need it. Not chatbots. We stay with you after launch for ongoing support.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF9132]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF9132]/10 border border-[#FF9132]/20">
                                    <TransparentIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Transparent Pricing</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                No hidden costs, no surprises. All-inclusive pricing that covers design, development, hosting, and support.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDF18]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5DDF18]/10 border border-[#5DDF18]/20">
                                    <HostingIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Hosting + Domain Included</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Fast, secure hosting with SSL certificate included. Plus your custom domain setup — all handled by us.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <SpeedIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Launch in 10-14 Days</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                No months of waiting. Most websites go live within 2 weeks. Fast turnaround without compromising quality.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF9132]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF9132]/10 border border-[#FF9132]/20">
                                    <MobileIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Easy Updates</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Update your content anytime with our simple dashboard. No technical knowledge required.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5DDF18]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5DDF18]/10 border border-[#5DDF18]/20">
                                    <DomainIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">100% Ownership</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                You own everything — the code, the design, the domain. Full access and control, always.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
