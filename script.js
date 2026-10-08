const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionCard = document.getElementById("questionCard");
const successCard = document.getElementById("successCard");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const toast = document.getElementById("toast");
const giftMessage = document.getElementById("giftMessage");

let noCount = 0;
const questions = [
  "Emin misin? Bir daha düşün...",
  "Cidden hayır mı diyorsun?",
  "Kalbimi kırmadan önce tekrar düşün bence.",
  "Son kararın mı? Bak YES çok tatlı duruyor.",
  "Bu NO butonu biraz kararsız galiba...",
];

function dodgeNo() {
  noCount++;
  question.textContent = questions[Math.min(noCount - 1, questions.length - 1)];
  subtext.textContent = "Hmmm... sanki yanlış butona basıyorsun.";
  // Telefonlarda da oynanabilir kalsın: buton kartın dışına kaçmaz.
  const x = Math.round((Math.random() - 0.5) * 150);
  const y = Math.round((Math.random() - 0.5) * 55);
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.textContent = noCount > 2 ? "emin misin?" : "NO";
  yesBtn.style.transform = `scale(${Math.min(1 + noCount * 0.07, 1.35)})`;
}

noBtn.addEventListener("pointerenter", dodgeNo);
noBtn.addEventListener("click", dodgeNo);

yesBtn.addEventListener("click", () => {
  questionCard.classList.add("hidden");
  successCard.classList.remove("hidden");
  document
    .querySelectorAll(".floating-heart")
    .forEach((h) => (h.style.animationDuration = ".8s"));
  showToast("Biliyordum! Bu cevap içimi ısıttı.");
});

document.getElementById("againBtn").addEventListener("click", () => {
  noCount = 0;
  noBtn.style.transform = "";
  yesBtn.style.transform = "";
  noBtn.textContent = "NO";
  question.textContent = "Beni seviyonmu ;))) ?";
  subtext.textContent = "Cevabını dikkatli seç bakalımm...";
  questionCard.classList.remove("hidden");
  successCard.classList.add("hidden");
});

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2400);
}
