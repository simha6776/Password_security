function check() {
    const val = document.getElementById('pw').value;
    const strength = document.getElementById('strength');
    const tips = document.getElementById('tips');
    let score = 0;
    let advice = [];

    if (val.length > 8) score++; else advice.push("Use 8+ characters");
    if (/[A-Z]/.test(val)) score++; else advice.push("Add uppercase");
    if (/[0-9]/.test(val)) score++; else advice.push("Add numbers");
    if (/[^A-Za-z0-9]/.test(val)) score++; else advice.push("Add symbols");

    const levels = ["Dangerous", "Weak", "Fair", "Strong", "Excellent"];
    strength.innerText = "Strength: " + (levels[score] || "Dangerous");
    strength.style.color = score < 3 ? "red" : "green";
    tips.innerHTML = advice.map(t => `<li>${t}</li>`).join('');
}
