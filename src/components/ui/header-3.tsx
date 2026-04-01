'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { PixelLogo } from '@/components/ui/pixel-logo';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
	CodeIcon,
	GlobeIcon,
	LayersIcon,
	UserPlusIcon,
	Users,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Handshake,
	Leaf,
	HelpCircle,
	BarChart,
	PlugIcon,
	Building2,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const { scrolled, hidden } = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg transition-transform duration-300 ease-in-out',
				scrolled ? 'border-border' : 'border-transparent',
				hidden ? '-translate-y-full' : 'translate-y-0'
			)}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="flex items-center gap-5">
					<PixelLogo href="/" />
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Product</NavigationMenuTrigger>
								<NavigationMenuContent className="p-1.5">
									<ul className="bg-card grid w-lg grid-cols-2 gap-2 rounded-lg border border-border p-2">
										{productLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
									<div className="p-2 pt-3">
										<p className="text-muted-foreground text-sm">
											Interested?{' '}
											<a href="#" className="text-foreground font-medium hover:underline">
												Schedule a demo
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Company</NavigationMenuTrigger>
								<NavigationMenuContent className="p-1.5">
									<div className="grid w-lg grid-cols-2 gap-0">
										<ul className="bg-card space-y-2 rounded-lg border border-border p-2">
											{companyLinks.map((item, i) => (
												<li key={i}>
													<ListItem {...item} />
												</li>
											))}
										</ul>
										<ul className="space-y-2 p-3">
											{companyLinks2.map((item, i) => (
												<li key={i}>
													<NavigationMenuLink
														href={item.href}
														className="flex p-2 hover:bg-accent flex-row rounded-md items-center gap-x-2"
													>
														<item.icon className="text-foreground size-4" />
														<span className="font-medium">{item.title}</span>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuLink className="px-4" asChild>
								<a href="/quote" className="hover:bg-accent rounded-md p-2">
									Pricing
								</a>
							</NavigationMenuLink>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="hidden md:flex">
					<Button asChild>
						<a href="/#products-section">Get Started</a>
					</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				<NavigationMenu className="max-w-full">
					<div className="flex w-full flex-col gap-y-2">
						<span className="text-sm">Product</span>
						{productLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						<span className="text-sm">Company</span>
						{companyLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						{companyLinks2.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
					</div>
				</NavigationMenu>
				<div className="flex flex-col gap-2">
					<Button asChild className="w-full">
						<a href="/#products-section">Get Started</a>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
	return (
		<NavigationMenuLink className={cn('w-full flex flex-row gap-x-3 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-lg p-2 transition-colors', className)} {...props} asChild>
			<a href={href}>
				<div className="bg-popover flex aspect-square size-12 items-center justify-center rounded-lg border border-border">
					<Icon className="text-foreground size-5" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-medium text-sm">{title}</span>
					<span className="text-muted-foreground text-xs">{description}</span>
				</div>
			</a>
		</NavigationMenuLink>
	);
}

const productLinks: LinkItem[] = [
	{
		title: 'SmartSite',
		href: '/website-builder',
		description: 'Create responsive websites with ease',
		icon: GlobeIcon,
	},
	{
		title: 'Cloud Platform',
		href: '#',
		description: 'Deploy and scale apps in the cloud',
		icon: LayersIcon,
	},
	{
		title: 'Hotelify',
		href: '/hotelify',
		description: 'Direct bookings. 0% commission.',
		icon: Building2,
	},
	{
		title: 'Team Collaboration',
		href: '#',
		description: 'Tools to help your teams work better together',
		icon: UserPlusIcon,
	},
	{
		title: 'Analytics',
		href: '#',
		description: 'Track and analyze your website traffic',
		icon: BarChart,
	},
	{
		title: 'Integrations',
		href: '#',
		description: 'Connect your apps and services',
		icon: PlugIcon,
	},
	{
		title: 'API',
		href: '#',
		description: 'Build custom integrations with our API',
		icon: CodeIcon,
	},
];

const companyLinks: LinkItem[] = [
	{
		title: 'About Us',
		href: '/about',
		description: 'Learn more about our story and team',
		icon: Users,
	},
	{
		title: 'Our Team',
		href: '/team',
		description: 'Meet the people behind our success',
		icon: Users,
	},
	{
		title: 'Customer Stories',
		href: '#',
		description: "See how we've helped our clients succeed",
		icon: Star,
	},
	{
		title: 'Partnerships',
		href: '#',
		icon: Handshake,
		description: 'Collaborate with us for mutual growth',
	},
];

const companyLinks2: LinkItem[] = [
	{
		title: 'Terms of Service',
		href: '/terms-of-service',
		icon: FileText,
	},
	{
		title: 'Privacy Policy',
		href: '/privacy-policy',
		icon: Shield,
	},
	{
		title: 'Refund Policy',
		href: '/refund-policy',
		icon: RotateCcw,
	},
	{
		title: 'Blog',
		href: '/blog',
		icon: Leaf,
	},
	{
		title: 'Help Center',
		href: '/help-center',
		icon: HelpCircle,
	},
];


function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);
	const lastScrollY = React.useRef(typeof window !== 'undefined' ? window.scrollY : 0);

	React.useEffect(() => {
		// Initialize on mount
		lastScrollY.current = window.scrollY;
		setScrolled(window.scrollY > threshold);

		const onScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - lastScrollY.current;
			
			setScrolled(currentScrollY > threshold);
			
			// Only hide/show after passing threshold and with minimum scroll delta
			if (currentScrollY > threshold) {
				// Scrolling down - hide header (need at least 5px movement)
				if (scrollDelta > 5) {
					setHidden(true);
				} 
				// Scrolling up - show header (need at least 5px movement)
				else if (scrollDelta < -5) {
					setHidden(false);
				}
			} else {
				setHidden(false);
			}
			
			// Only update lastScrollY if there was significant movement
			if (Math.abs(scrollDelta) > 5) {
				lastScrollY.current = currentScrollY;
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [threshold]);

	return { scrolled, hidden };
}
