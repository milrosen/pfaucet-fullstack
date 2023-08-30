<script lang="ts">
	export let staff: Staff;
</script>

<div class="staff-card">
	<div class="headshot-wrapper">
		<img src={staff.headshot} alt={`404 not found: ${staff.name} should be here`} />
	</div>
	<div class="title-section">
		<div class="title"><b>{staff.title}</b></div>
		<div class="date">Since {staff.date_started}</div>
	</div>
	<div class="name">{staff.name}</div>
	<div class="degree"><em>{staff.degree}</em></div>
	<div class="hometown">📍{staff.hometown}</div>
	<p>{staff.description}</p>
</div>

<style>
	.staff-card {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1rem;
	}
	.headshot-wrapper {
		height: 10rem;
		display: flex;
		justify-content: center;
	}
	img {
		height: 100%;
		object-fit: contain;
	}
	.title-section {
		height: 3.5rem;
		display: flex;
		justify-content: space-around;
	}
	div {
		margin: 0.25rem 0;
	}
</style>
