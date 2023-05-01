<script>
	import ExternalLink from '../ExternalLink.svelte'
	import Calendar from '../icons/Calendar.svelte'
</script>

<section>
	<h2>
		save in your
		<br />calendar
		<Calendar />
	</h2>

	<div>
		<ExternalLink
			href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240701T1200%2F20240703T1200&details=https%3A%2F%2Fwestrup-wallin.vercel.app&location=Alma%20do%20Pa%C3%A7o%2C%20Travessa%20das%20Ruinas%2C%202640-825%20Pa%C3%A7%20-D%27Ilhas%2C%20Portugal&text=Westrup-Wallin%20Wedding"
		>
			Google Calendar
		</ExternalLink>

		<ExternalLink href="/westrup-wallin.ics" download>Apple</ExternalLink>

		<ExternalLink
			href="https://outlook.live.com/calendar/0/deeplink/compose?allday=true&body=https%3A%2F%2Fwestrup-wallin.vercel.app&enddt=2024-07-03T22%3A00%3A00%2B00%3A00&location=Alma%20do%20Pa%C3%A7o%2C%20Travessa%20das%20Ruinas%2C%202640-825%20Pa%C3%A7%20-D%27Ilhas%2C%20Portugal&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-30T22%3A00%3A00%2B00%3A00&subject=Westrup-Wallin%20Wedding"
		>
			Microsoft Outlook
		</ExternalLink>

		<ExternalLink
			href="https://outlook.office.com/calendar/0/deeplink/compose?allday=true&body=https%3A%2F%2Fwestrup-wallin.vercel.app&enddt=2024-07-03T22%3A00%3A00%2B00%3A00&location=Alma%20do%20Pa%C3%A7o%2C%20Travessa%20das%20Ruinas%2C%202640-825%20Pa%C3%A7%20-D%27Ilhas%2C%20Portugal&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-30T22%3A00%3A00%2B00%3A00&subject=Westrup-Wallin%20Wedding"
		>
			Office 365
		</ExternalLink>
	</div>
</section>

<style lang="scss">
	section {
		padding-bottom: 7.5rem;
		padding-inline: var(--content--padding--inline);
	}

	h2 {
		font-size: var(--heading--m);
		margin-bottom: 2rem;
	}

	div {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
