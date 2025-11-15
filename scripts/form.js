document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // Prevents the page from reloading just because it feels like it

    // Collect all the details submitted by the person
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const time = document.getElementById("time").value;
    const reason = document.getElementById("reason").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    // Gathers the selected radio button
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

    // Gathers all selected checkboxes
        const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
        .map(cb => cb.value)
        .join(", ") || "None";

    // Create an array of key-value pairs
    const formData = [
        ["Name", name],
        ["Email", email],
        ["Phone", phone],
        ["Preferred Time", time],
        ["Contact Method", contactMethod],
        ["Services Interested In", services],   
        ["Topic", topic],
        ["Message", message]
    ];

    // Shows off all results
        const resultContainer = document.getElementById("resultContainer");
        const resultBody = document.querySelector("#resultTable tbody");
        resultBody.innerHTML = ""; // Clear any previous entries made
        resultContainer.style.display = "block";

    // Populates the table with information (Otherwise why have one?)
        formData.forEach(([key, value]) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${key}</td><td>${value}</td>`;
            resultBody.appendChild(row);
        });

    // Resets the form for multiple uses
    this.reset();
});