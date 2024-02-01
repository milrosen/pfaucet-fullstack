<script>import { enhance } from '$app/forms';</script>

<form method="POST" action="?/uploadIssue" use:enhance>
    <h1> Add New Issue</h1>
	<label>
        Issue Name
		<input name="issue name" type="text">
	</label>
	<label>
        Blurb - Can be empty (the red bars)
		<input name="blurb" type="text">
	</label>
    <label>
        Paragraph - Can be empty (the small text underneath)
		<input name="paragraph" type="text">
	</label>
    <label>
        pdf
        <input name="pdf" type="file"  accept="application/pdf">
    </label>
    <label>
        thumbnail
        <input name="thumbnail" type="file" accept="image/*">
    </label>
	<button type="submit">Upload</button>
</form>

<style>
    form {
    font-family: 'Arial', sans-serif; /* Keeps the text lookin' neat */
    background-color: #f2f2f2; /* A nice, light background */
    padding: 20px; /* Adds some padding inside the form */
    border-radius: 5px; /* Gives those corners a gentle curve */
    box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* A subtle shadow for depth */
    max-width: 500px; /* Keeps the form from gettin' too wide */
    margin: auto; /* Centers the form nicely */
}

/* Stylin' those text inputs so they're as welcoming as a front porch swing */
input[type="text"], input[type="file"] {
    width: 100%; /* Makes 'em fill the form */
    padding: 10px; /* Adds some cushion for typing */
    margin-top: 8px; /* Spaces 'em out a bit */
    margin-bottom: 20px; /* Gives some breathing room */
    display: inline-block; /* Keeps 'em in line */
    border: 1px solid #ccc; /* A light border, like a fence around the yard */
    border-radius: 4px; /* Softens those corners */
    box-sizing: border-box; /* Makes sure padding don't affect the overall width */
}

/* Can't forget about the submit button, gotta make it inviting */
input[type="submit"] {
    background-color: #4CAF50; /* A nice, lively green */
    color: white; /* So the text stands out */
    padding: 14px 20px; /* Comfortable to the click */
    margin: 8px 0; /* Just a tad of spacing */
    border: none; /* No border needed here */
    border-radius: 4px; /* Matchin' those soft corners */
    cursor: pointer; /* Changes the cursor to suggest clicking */
}

/* Makes sure that button knows when it's being hovered over */
input[type="submit"]:hover {
    background-color: #45a049; /* A shade darker for that interactive feel */
}
</style>