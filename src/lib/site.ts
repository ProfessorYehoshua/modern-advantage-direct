import { base } from '$app/paths';

// Prefix internal paths with the deploy base path (e.g. /repo-name on GitHub Pages).
export const link = (path: string) => `${base}${path}`;

// Central place for brand + contact details. Swap placeholders here once they're final.
export const site = {
	name: 'Modern Advantage Direct',
	// TODO: replace with the real logo files (see static/). Keep the same paths to avoid code changes.
	logo: link('/mad-logo-placeholder.svg'),
	icon: link('/mad-icon-placeholder.svg'),
	// TODO: placeholder phone number — replace with the real line.
	phoneDisplay: '(800) 555-0123',
	phoneHref: 'tel:18005550123',
	// TODO: placeholder hours — confirm.
	hours: 'Mon–Fri 8am–8pm ET'
};

export const nav = [
	{ href: link('/how-it-works'), label: 'How It Works' },
	{ href: link('/who-we-help'), label: 'Who We Help' },
	{ href: link('/about'), label: 'About' },
	{ href: link('/faq'), label: 'FAQ' }
];

export const legalNav = [
	{ href: link('/privacy'), label: 'Privacy Policy' },
	{ href: link('/terms'), label: 'Terms of Use' },
	{ href: link('/disclosures'), label: 'Disclosures' }
];

export const consultationHref = link('/free-consultation');

// Shared style for primary (gradient) buttons
export const ctaClass =
	'bg-brand-gradient font-bold text-white shadow-md shadow-pink-500/20 transition hover:brightness-110 hover:shadow-lg hover:shadow-pink-500/30';
