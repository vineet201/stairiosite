import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowRightIcon, PhoneCallIcon, Globe, Smartphone, Zap } from "lucide-react";

export function HeroSectionWebsiteBuilder() {
	return (
		<section className="mx-auto w-full max-w-5xl overflow-hidden pt-8 px-4">
			{/* Shades */}
			<div aria-hidden="true" className="absolute inset-0 size-full overflow-hidden">
				<div
					className={cn(
						"absolute inset-0 isolate -z-10",
						"bg-[radial-gradient(20%_80%_at_20%_0%,--theme(--color-foreground/.1),transparent)]"
					)}
				/>
			</div>

			<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

				{/* Left Content */}
				<div className="flex flex-col gap-5">
					<a
						className={cn(
							"group flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow-xs",
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
						)}
						href="#link"
					>
						<div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
							<p className="font-mono text-xs">NEW</p>
						</div>
						<span className="text-xs">AI enabled websites</span>
						<span className="block h-5 border-l" />
						<div className="pr-1">
							<ArrowRightIcon className="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5" />
						</div>
					</a>

					<h1
						className={cn(
							"text-balance font-medium text-4xl text-foreground leading-tight md:text-5xl",
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out"
						)}
					>
						Stop Losing Customers to a Missing Website
					</h1>

					<p
						className={cn(
							"text-muted-foreground text-sm tracking-wider sm:text-lg md:text-xl",
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out"
						)}
					>
						Build a powerful website that earns trust, attracts <br /> customers, and drives real sales.
					</p>

					{/* Typewriter */}
					<div
						className={cn(
							"min-h-[3rem] sm:min-h-[2.5rem]",
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-300 duration-500 ease-out"
						)}
					>
						<p className="text-muted-foreground text-xs tracking-wide sm:text-sm">
							<Typewriter
								text="Professional websites for restaurants, clinics, salons, coaches, and every business ready to grow online. Go live in 10-14 days."
								speed={30}
								initialDelay={500}
								loop={false}
								showCursor={true}
								cursorChar="|"
								className="text-muted-foreground"
							/>
						</p>
					</div>

					{/* Feature chips */}
					<div
						className={cn(
							"flex flex-wrap gap-3",
							"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-400 duration-500 ease-out"
						)}
					>
						<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 border border-stone-200">
							<Smartphone className="w-4 h-4 text-emerald-600" />
							<span className="text-xs text-stone-700 font-medium">Mobile-First</span>
						</div>
						<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 border border-stone-200">
							<Globe className="w-4 h-4 text-blue-600" />
							<span className="text-xs text-stone-700 font-medium">SEO Ready</span>
						</div>
						<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-100 border border-stone-200">
							<Zap className="w-4 h-4 text-amber-600" />
							<span className="text-xs text-stone-700 font-medium">Lightning Fast</span>
						</div>
					</div>
				</div>

				{/* Right — Image + Buttons */}
				<div
					className={cn(
						"relative hidden lg:flex lg:flex-col gap-4",
						"fade-in slide-in-from-right-10 animate-in fill-mode-backwards delay-300 duration-700 ease-out"
					)}
				>
					{/* Ambient glow */}
					<div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#D8B4FE]/10 via-transparent to-[#FF9132]/8 blur-2xl pointer-events-none" />

					<div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
						<img
							src="/images/showcase/Hotel Website.png"
							alt="Professional website built by Stairio"
							className="w-full h-auto block"
						/>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-3 mt-12">
						<Button
							variant="outline"
							size="lg"
							className="px-7 py-6 text-base border-white text-white hover:bg-white/10"
						>
							<PhoneCallIcon className="size-5 mr-2" />
							Book a Call
						</Button>
						<Button
							size="lg"
							className="px-7 py-6 text-base bg-white text-black hover:bg-white/90"
						>
							Start Building
							<ArrowRightIcon className="size-5 ml-2" />
						</Button>
					</div>
				</div>

			</div>
		</section>
	);
}
