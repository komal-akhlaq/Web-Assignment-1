document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(this);
    const applicantData = {};
    for (const [key, value] of formData.entries()) {
        applicantData[key] = value;
    }

    // Log form data (you may replace this with your own logic to store the data)
    console.log(applicantData);
});

document.getElementById("viewAsTableBtn").addEventListener("click", function() {
    // Sample data, replace with actual data retrieval logic
    const applicants = [
        { firstName: "John", lastName: "Doe", email: "john@example.com", phoneNumber: "1234567890" },
        { firstName: "Jane", lastName: "Smith", email: "jane@example.com", phoneNumber: "9876543210" }
    ];

    // Create HTML table
    const table = document.createElement("table");
    const headers = Object.keys(applicants[0]);
    const headerRow = table.insertRow();
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Add data rows
    applicants.forEach(applicant => {
        const row = table.insertRow();
        headers.forEach(header => {
            const cell = row.insertCell();
            cell.textContent = applicant[header];
        });
    });

    // Clear previous table, if any
    document.getElementById("applicationsTable").innerHTML = "";
    
    // Append table to DOM
    document.getElementById("applicationsTable").appendChild(table);
});
