// Custom SVG Icons - Professional, minimal line icons with consistent 1.5px stroke
const WebsiteIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="6.5" cy="6.5" r="0.75" fill="#D8B4FE" stroke="none" />
        <circle cx="9.5" cy="6.5" r="0.75" fill="#D8B4FE" stroke="none" />
        <path d="M7 14h10M7 17h6" />
    </svg>
)

const BookingIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 2v4M16 2v4" />
        <path d="M8 14l2 2 4-4" />
    </svg>
)

const SecurityIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
)

const CustomizeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
)

const IntegrationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="6" height="6" rx="1" />
        <rect x="16" y="6" width="6" height="6" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M8 9h8M12 12v2" />
    </svg>
)

const PaymentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4M14 15h4" />
    </svg>
)

const AIIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M6 10v1a6 6 0 0012 0v-1" />
        <path d="M12 17v5" />
        <path d="M8 22h8" />
        <circle cx="10" cy="6" r="0.75" fill="#D8B4FE" stroke="none" />
        <circle cx="14" cy="6" r="0.75" fill="#D8B4FE" stroke="none" />
    </svg>
)

const AutomationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4" />
        <circle cx="12" cy="12" r="4" />
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
)

const DashboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
    </svg>
)

export function Features() {
    return (
        <section className="pt-12 pb-12 md:pt-16 md:pb-20 bg-black">
            <div className="mx-auto max-w-6xl space-y-10 px-6 md:space-y-14">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Features that matters, No BS</h2>
                </div>

                <div className="relative mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <WebsiteIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Complementary Website</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">You'll receive a Full Stack Website designed by professionals, worth ₹32,999 at no extra cost. Every tap feels instant. Every booking, effortless.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <BookingIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Booking Engine</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">A Powerful Booking Engine that handles bookings, payments, reviews and a lot more. Operations—all working as one.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <SecurityIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Security</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">CSRF Protection, Secure Token Exchange, Auto-verification, Account Linking, along with SSL Certificate that proves your authenticity.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <CustomizeIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Customization</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">Imagine any possible feature, and our brilliant team will craft that - Your businesses, Our Innovation.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <IntegrationIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Integration</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">Advanced Channel Manager (Under Partner Program) available with partner benefits. No more overpriced clutter.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <PaymentIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Secure Payments</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">Advanced Payment integration lets you receive your money immediately. Say goodbye to 14 day pending payments.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <AIIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Built for AI</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">It supports multiple AI features that makes your platform AI Enabled - Not AI Generated.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <AutomationIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Automations</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">Imagine a system where redundant tasks happen automatically. Powered by Stairio with automatic invoicing, assignments, and much more.</p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B4FE]/10 border border-[#D8B4FE]/20">
                                    <DashboardIcon />
                                </div>
                                <h3 className="text-base font-semibold text-white">Control</h3>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed">Run your entire hotel from one intuitive dashboard (Ultimate PMS with role-wise Dashboards). Simple to use. Powerful enough for everything.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
