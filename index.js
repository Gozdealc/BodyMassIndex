
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Kullanıcı girişlerini al
    const weight = parseFloat(document.getElementById('weight-input').value);
    const heightCm = parseFloat(document.getElementById('height-input').value);

    // Giriş doğrulama
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        alert("Lütfen geçerli bir kilo ve boy giriniz.");
        return;
    }

    // Boyu metreye çevir ve BMI hesapla
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    // BMI değerine göre yüzde hesaplama
    let positionPercentage = 0;

    if (bmi <= 18.4) {
        positionPercentage = (bmi / 18.4) * 20; // Zayıf: 0–20%
    } else if (bmi <= 24.9) {
        positionPercentage = 20 + ((bmi - 18.5) / (24.9 - 18.5)) * 20; // Normal: 20–40%
    } else if (bmi <= 29.9) {
        positionPercentage = 40 + ((bmi - 25) / (29.9 - 25)) * 20; // Kilolu: 40–60%
    } else if (bmi <= 39.9) {
        positionPercentage = 60 + ((bmi - 30) / (39.9 - 30)) * 20; // Obez: 60–80%
    } else {
        positionPercentage = 80 + ((bmi - 40) / 10) * 20; // Aşırı Obez: 80–100%
    }

    // Çizgiyi hareket ettir
    const separator = document.querySelector(".separator");
    separator.style.left = `${positionPercentage}%`;

    // Sonucu göster
    document.getElementById("calcIndex").textContent = bmi;
    // Ek bilgiler
    const resultInfo = document.querySelector(".result-info");
    if (bmi <= 18.4) {
        resultInfo.textContent = "Zayıf";
    } else if (bmi <= 24.9) {
        resultInfo.textContent = "Sağlıklı";
    } else if (bmi <= 29.9) {
        resultInfo.textContent = "Kilolu";
    } else if (bmi <= 39.9) {
        resultInfo.textContent = "Obez";
    } else {
        resultInfo.textContent = "Aşırı Obez";
    }
});

