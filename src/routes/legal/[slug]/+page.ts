import { error } from '@sveltejs/kit';
import { legalPages } from '$lib/site';
import type { EntryGenerator, PageLoad } from './$types';

// Tell the static build which legal pages to generate
export const entries: EntryGenerator = () => legalPages.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const legalPage = legalPages.find((p) => p.slug === params.slug);
	if (!legalPage) error(404, 'Not found');
	return { title: legalPage.label };
};
