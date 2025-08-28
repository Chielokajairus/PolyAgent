import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation configurations
export const animationDefaults = {
	duration: 0.8,
	ease: 'power2.out',
	stagger: 0.1
};

// Hero section animations
export const heroAnimations = {
	// Text reveal animation
	textReveal: (elements: string[]) => {
		gsap.fromTo(elements, 
			{ 
				y: 30, 
				opacity: 0 
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'power2.out',
				stagger: 0.2
			}
		);
	},

	// CTA buttons animation
	ctaReveal: (elements: string[]) => {
		gsap.fromTo(elements,
			{
				x: -20,
				opacity: 0
			},
			{
				x: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.out',
				stagger: 0.15
			}
		);
	}
};

// Scroll-triggered animations
export const scrollAnimations = {
	// Fade in from bottom
	fadeInUp: (element: string, delay: number = 0) => {
		gsap.fromTo(element,
			{
				y: 40,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.out',
				delay,
				scrollTrigger: {
					trigger: element,
					start: 'top 85%',
					end: 'bottom 15%',
					toggleActions: 'play none none reverse'
				}
			}
		);
	},

	// Scale in animation
	scaleIn: (element: string, delay: number = 0) => {
		gsap.fromTo(element,
			{
				scale: 0.95,
				opacity: 0
			},
			{
				scale: 1,
				opacity: 1,
				duration: 0.6,
				ease: 'power2.out',
				delay,
				scrollTrigger: {
					trigger: element,
					start: 'top 90%',
					end: 'bottom 10%',
					toggleActions: 'play none none reverse'
				}
			}
		);
	},

	// Counter animation
	counterAnimation: (element: string, targetValue: number) => {
		const counter = { value: 0 };
		gsap.to(counter, {
			value: targetValue,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			},
			onUpdate: () => {
				const el = document.querySelector(element);
				if (el) {
					el.textContent = Math.round(counter.value) + '%';
				}
			}
		});
	}
};

// Micro-interactions
export const microInteractions = {
	// Button hover effect
	buttonHover: (element: string) => {
		gsap.to(element, {
			scale: 1.02,
			duration: 0.2,
			ease: 'power2.out'
		});
	},

	buttonHoverOut: (element: string) => {
		gsap.to(element, {
			scale: 1,
			duration: 0.2,
			ease: 'power2.out'
		});
	},

	// Navigation link hover
	navHover: (element: string) => {
		gsap.to(element, {
			y: -2,
			duration: 0.2,
			ease: 'power2.out'
		});
	},

	navHoverOut: (element: string) => {
		gsap.to(element, {
			y: 0,
			duration: 0.2,
			ease: 'power2.out'
		});
	}
};

// Page transitions
export const pageTransitions = {
	// Smooth section transition
	sectionTransition: (fromSection: string, toSection: string) => {
		const tl = gsap.timeline();
		
		tl.to(fromSection, {
			opacity: 0,
			y: -20,
			duration: 0.4,
			ease: 'power2.inOut'
		})
		.to(toSection, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: 'power2.out'
		}, '-=0.2');
		
		return tl;
	},

	// Fade in page content
	fadeInPage: () => {
		gsap.fromTo('main', 
			{ opacity: 0 },
			{ 
				opacity: 1, 
				duration: 0.8, 
				ease: 'power2.out' 
			}
		);
	}
};

// Initialize all animations
export const initAnimations = () => {
	// Hero animations
	heroAnimations.textReveal(['.hero-title', '.hero-subtitle', '.hero-description']);
	heroAnimations.ctaReveal(['.hero-cta']);

	// Scroll animations for sections
	scrollAnimations.fadeInUp('.case-study-card', 0.1);
	scrollAnimations.scaleIn('.tech-category', 0.1);
	scrollAnimations.fadeInUp('.contact-method', 0.1);

	// Counter animations
	scrollAnimations.counterAnimation('.metric-40', 40);
	scrollAnimations.counterAnimation('.metric-99', 99);
	scrollAnimations.counterAnimation('.metric-100', 100);
	scrollAnimations.counterAnimation('.metric-50', 50);
};

// Cleanup function
export const cleanupAnimations = () => {
	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

