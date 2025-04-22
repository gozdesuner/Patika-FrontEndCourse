// Yeni bir öğe ekleme fonksiyonu
function newElement() {
  const inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("Bir şeyler yazmanız gerekiyor!");
    return;
  }

  const li = document.createElement("li");
  const text = document.createTextNode(inputValue);
  li.appendChild(text);

  // Kapatma butonu ekle
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7"); // X işareti
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Listeye öğe ekle
  document.getElementById("myUL").appendChild(li);

  // Giriş alanını temizle
  document.getElementById("myInput").value = "";

  // Kapatma butonuna işlev ekle
  span.onclick = function () {
    this.parentElement.remove();
  };

  // Öğeyi tamamlanmış olarak işaretleme
  li.onclick = function () {
    this.classList.toggle("checked");
  };
}
