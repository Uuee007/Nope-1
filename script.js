// Tahun otomatis di footer
document.getElementById("tahun").textContent = new Date().getFullYear();

// Penghitung klik
let jumlah = 0;
const counterEl = document.getElementById("counter");

document.getElementById("btn-plus").addEventListener("click", () => {
  jumlah++;
  counterEl.textContent = jumlah;
});

document.getElementById("btn-reset").addEventListener("click", () => {
  jumlah = 0;
  counterEl.textContent = jumlah;
});

// Sapaan personal
const namaInput = document.getElementById("nama");
const sapaanEl = document.getElementById("sapaan");

function sapa() {
  const nama = namaInput.value.trim();
  sapaanEl.textContent = nama
    ? `Halo, ${nama}! Selamat datang di website ini 🎉`
    : "Silakan ketik namamu dulu ya 🙂";
}

document.getElementById("btn-sapa").addEventListener("click", sapa);
namaInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sapa();
});

// Mode gelap (diingat di browser)
const btnTema = document.getElementById("btn-tema");

function terapkanTema(gelap) {
  document.body.classList.toggle("dark", gelap);
  btnTema.textContent = gelap ? "☀️ Mode Terang" : "🌙 Mode Gelap";
}

let temaGelap = false;
try {
  temaGelap = localStorage.getItem("tema") === "dark";
} catch (e) {}
terapkanTema(temaGelap);

btnTema.addEventListener("click", () => {
  temaGelap = !document.body.classList.contains("dark");
  terapkanTema(temaGelap);
  try {
    localStorage.setItem("tema", temaGelap ? "dark" : "light");
  } catch (e) {}
});
