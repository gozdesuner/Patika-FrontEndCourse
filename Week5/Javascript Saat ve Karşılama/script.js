// Kullanıcıdan isim al
let userName = prompt("Lütfen isminizi giriniz:");

// İsmi HTML'e yaz
document.getElementById(
  "greeting"
).innerHTML = `Merhaba, <strong>${userName}</strong>! Hoş geldin!`;

// Saati gösteren fonksiyon
function showTime() {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");

  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let dayName = days[now.getDay()];

  document.getElementById(
    "clock"
  ).innerHTML = `${hour}:${minute}:${second} ${dayName}`;
}

// Her saniyede bir güncelle
setInterval(showTime, 1000);
