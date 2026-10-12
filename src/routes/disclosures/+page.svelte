<script lang="ts">
	import { site } from '$lib/site';
	import LegalPage from '$lib/components/site/LegalPage.svelte';
</script>

<!-- TODO: DRAFT — have compliance/counsel review before launch. Add a disclosure of any
     compensation received from partner law firms, if applicable. -->
<LegalPage title="Disclosures">
	<p
		class="p-4 text-sm font-medium text-amber-800 bg-amber-50 rounded-lg border border-amber-200"
	>
		Draft — pending compliance review.
	</p>

	<h2>We Are Not a Law Firm</h2>
	<p>
		{site.name} is not a law firm, does not provide legal advice, and is not a substitute for an
		attorney. Information on this website is for general informational purposes only.
	</p>

	<h2>Independent Law Firms</h2>
	<p>
		{site.name} connects consumers with independent consumer rights law firms. Legal services are
		provided solely by those firms. An attorney-client relationship is formed only when you sign a
		written agreement directly with a law firm. {site.name} does not control the legal advice or
		services a law firm provides.
	</p>

	<h2>Fees</h2>
	<p>
		The consultation with {site.name} is free. Any fees for legal services are set by and payable to
		the law firm, as described in the law firm’s written agreement. Review that agreement carefully
		before signing.
	</p>

	<h2>No Guarantee of Results</h2>
	<p>
		Every situation is different. Results vary and are not guaranteed. Not all debts qualify, and
		you may still owe debts that are valid. Disputing a debt does not prevent a creditor or collector
		from filing a lawsuit.
	</p>

	<h2>What We Are Not</h2>
	<p>
		{site.name} is not a credit repair organization, a debt settlement company, a debt consolidation
		company, or a lender.
	</p>

	<h2>Availability</h2>
	<p>Services are not available in all states.</p>
</LegalPage>
