document.getElementById("csintForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    const ipAddress = document.getElementById("ipAddress").value;

    if (ipAddress === "") {
        alert("Please enter an IP address.");
        return;
    }

    // Send the request to the backend
    fetch(`/analyze-ip/${ipAddress}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("responseMessage").textContent = `Error: ${data.error}`;
            } else {
                document.getElementById("responseMessage").textContent = `IP Address: ${data.ip} is ${data.status}.`;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("responseMessage").textContent = "An error occurred. Please try again.";
        });
});
