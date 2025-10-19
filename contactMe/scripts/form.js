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

    // Displays it all in a neat little alert
    alert(  `--- CONTACT FORM DATA ---\n\n` +
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Time: ${time}\nReason for Contact: ${reason}\nContact Method: ${contactMethod}\nServices Interested In:
    ${services}\nTopic: ${topic}\nMessage: ${message}`);

    // Resets the form for multiple uses
    this.reset();
});