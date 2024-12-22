function selectRole(role) {
    alert(`You have selected the role: ${role}`);
    // Store the role (optional)
    sessionStorage.setItem("role", role);
    // Redirect to the profile form or another page after selecting the role
    window.location.href = "profile-form.html"; // Update this URL as needed
}
