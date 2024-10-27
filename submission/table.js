function makeTable()
{
	// get table data from main file
	var tableSize = document.getElementById("tableSize").value;
	var table = document.getElementById("timesTable");
	
	// clear any previous generation
	table.innerHTML = '';
	
	// for loop to calculate each number
	for (let row = 0; row <= tableSize; row++)
	{
		// create a new row to add values to
		const newRow = document.createElement("tr");
		for (let col = 0; col <= tableSize; col++)
		{
			// create a new table cell to store result
			const result = document.createElement("td");
			
			// check if the row is on the edge & assign proper value
			if (row === 0 && col === 0)
			{
				result.textContent = "";
			}
			else if (row === 0)
			{
				result.textContent = col;
			}
			else if (col === 0)
			{
				result.textContent = row;
			}
			
			// perform multiplication
			else
			{
				result.textContent = row*col;
			}
			// add the result to the row
			newRow.appendChild(result);
		}
		
		// add the row to the table
		table.appendChild(newRow);
	}
}