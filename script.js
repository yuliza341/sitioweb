function calculateLife() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const now = new Date();

    if (birthdate > now) {
        document.getElementById('result').innerHTML = "La fecha de nacimiento no puede ser en el futuro.";
        return;
    }

    const diffInMilliseconds = now - birthdate;
    const diffInSeconds = diffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    
    const years = now.getFullYear() - birthdate.getFullYear();
    const months = (years * 12) + (now.getMonth() - birthdate.getMonth());

    document.getElementById('result').innerHTML = `
        Has vivido aproximadamente:<br>
        ${Math.floor(diffInDays)} días<br>
        ${months} meses
        ${Math.floor(diffInHours)} horas
        
    `;
    
}