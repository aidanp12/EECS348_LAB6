function validatePassword()
{
	// pull variable data from main file
	const pass1 = document.getElementById("pass1").value
	const pass2 = document.getElementById("pass2").value
	
	// check password validity
	if (pass1.length < 8)
	{
		alert("Password is not long enough!");
	}
	else if (pass1 != pass2)
	{
		alert("Passwords do not match!");
	}
	else
	{
		alert("Passwords are valid!");
	}
}