
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const localChurch = document.getElementById('firstName').value;
    const zone = document.getElementById('zone').value;
    const area = document.getElementById('area').value;
    const enquiry = document.getElementById('response').value;
    const volunteer = document.getElementById('volunteer').value;
    const department = document.getElementById('department').value;

    const regResponse = await fetch('https://gotp.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            phone: contact,
            localChurch: localChurch,
            zone: zone,
            area: area,
            response: enquiry,
            volunteer: volunteer,
            department: department
        })
    });
    if (!regResponse.ok) {
        throw new Error(`HTTP error! status: ${regResponse.status}`);
    } else {
        alert("Registration Successful!");
        window.location.href = "index.html";
    };
})
