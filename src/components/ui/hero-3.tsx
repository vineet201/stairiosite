import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl overflow-hidden pt-8 px-4">
			{/* Shades */}
			<div
				aria-hidden="true"
				className="absolute inset-0 size-full overflow-hidden"
			>
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
						<p className="font-mono text-xs">NOW</p>
					</div>

					<span className="text-xs">accepting new client projects</span>
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
					Building Digital Experiences That Drive Growth
				</h1>

				<p
					className={cn(
						"text-muted-foreground text-sm tracking-wider sm:text-lg md:text-xl",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out"
					)}
				>
					We help Businesses scale faster through design, development <br /> and
					strategic execution.
				</p>

				{/* Typewriter Text */}
				<div
					className={cn(
						"min-h-[3rem] sm:min-h-[2.5rem]",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-300 duration-500 ease-out"
					)}
				>
					<p className="text-muted-foreground text-xs tracking-wide sm:text-sm">
						<Typewriter
							text="The complete digital system along PMS for hotels to increase direct bookings, reduce OTA dependency, Ultimately saving more than 1.6 lacks annually"
							speed={30}
							initialDelay={500}
							loop={false}
							showCursor={true}
							cursorChar="|"
							className="text-muted-foreground"
						/>
					</p>
				</div>

				{/* Website Included Container */}
				<div
					className={cn(
						"relative inline-flex items-center justify-between gap-4 rounded-lg px-5 py-3 mt-4",
						"bg-stone-100 border border-stone-200 shadow-sm",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-400 duration-500 ease-out"
					)}
				>
					<span className="text-stone-800 text-xs sm:text-sm font-medium">
						1 x Professionally Designed website included at No Extra Cost. (Upto 15 pages)
					</span>
					<span className="bg-emerald-500 text-[10px] font-bold text-white px-2 py-1 rounded-md shadow-sm uppercase tracking-wide">
						Free
					</span>
				</div>

				</div>

				{/* Right Image */}
				<div
					className={cn(
						"relative hidden lg:flex lg:flex-col",
						"fade-in slide-in-from-right-10 animate-in fill-mode-backwards delay-300 duration-700 ease-out"
					)}
				>
					<div className="relative overflow-hidden rounded-2xl border bg-background/50 p-2 shadow-2xl ring-1 ring-white/10">
						<img
							alt="Hotel SaaS Dashboard"
							className="aspect-[4/3] w-full rounded-xl object-cover"
							src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
						/>
						{/* Floating Stats Card */}
						<div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 backdrop-blur-sm p-3 shadow-lg">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-xs text-stone-500">Direct Bookings</p>
									<p className="text-lg font-bold text-stone-800">+127%</p>
								</div>
								<div className="h-8 w-px bg-stone-200" />
								<div>
									<p className="text-xs text-stone-500">Revenue Saved</p>
									<p className="text-lg font-bold text-emerald-600">₹1.6L+</p>
								</div>
								<div className="h-8 w-px bg-stone-200" />
								<div>
									<p className="text-xs text-stone-500">OTA Dependency</p>
									<p className="text-lg font-bold text-red-500">-45%</p>
								</div>
							</div>
						</div>
					</div>
					{/* Buttons */}
					<div className="flex-1 flex items-end justify-end gap-3 pt-4">
						<Button variant="outline" size="lg" className="px-9 py-6 text-base">
							<PhoneCallIcon className="size-5 mr-2" data-icon="inline-start" />{" "}
							Book a Call
						</Button>
						<Button size="lg" className="px-9 py-6 text-base">
							Get started{" "}
							<ArrowRightIcon className="size-5 ml-2" data-icon="inline-end" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
