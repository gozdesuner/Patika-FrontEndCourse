function startApp() {
  const name = document.getElementById("name").value.trim();

  if (name === "") {
    alert("Lütfen isminizi giriniz.");
    return;
  }

  // İsmi yazdır
  document.getElementById(
    "greeting"
  ).innerHTML = `Merhaba, <strong>${name}</strong>! Hoş geldin!`;

  // Ekran geçişi
  document.getElementById("nameInputContainer").style.display = "none";
  document.getElementById("mainContainer").style.display = "block";

  // Saati başlat
  showTime();
  setInterval(showTime, 1000);
}

function showTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const day = days[now.getDay()];

  document.getElementById(
    "clock"
  ).innerHTML = `${hour}:${minute}:${second} ${day}`;
}
