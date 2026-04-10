const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.toggle("show");
  });
}

const params = new URLSearchParams(window.location.search);
const place = params.get("place");

const data = {
  italy: {
    title: "Italy",
    desc: "Not the checklist version — the slow, lived-in version.",
    cities: [
      { name: "Rome", desc: "Get lost. That’s the point." },
      { name: "Florence", desc: "Art, but also quiet streets." },
      { name: "Naples", desc: "Messy, real, unforgettable." }
    ]
  },

  japan: {
    title: "Japan",
    desc: "Precision, calm, and moments you don’t rush.",
    cities: [
      { name: "Tokyo", desc: "Fast outside, still inside." },
      { name: "Kyoto", desc: "Tradition that breathes." },
      { name: "Osaka", desc: "Food that actually hits." }
    ]
  },

  morocco: {
    title: "Morocco",
    desc: "Color, chaos, and rhythm you don’t control.",
    cities: [
      { name: "Marrakech", desc: "Alive in every sense." },
      { name: "Fez", desc: "Old world, still moving." },
      { name: "Chefchaouen", desc: "Quiet, blue, unreal." }
    ]
  }
};

if (data[place]) {
  document.getElementById("countryTitle").innerText = data[place].title;
  document.getElementById("countryDesc").innerText = data[place].desc;

  const grid = document.getElementById("cityGrid");

  data[place].cities.forEach(city => {
    const card = `
      <div class="info-card">
        <div class="card-body">
          <h3>${city.name}</h3>
          <p>${city.desc}</p>
        </div>
      </div>
    `;
    grid.innerHTML += card;
  });
}

const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageInput && charCount) {
  messageInput.addEventListener("input", () => {
    charCount.textContent = messageInput.value.length + " / 200";
  });
}

function validateContactForm() {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const topic = document.getElementById("topic");
  const message = document.getElementById("message");

  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Please enter your name";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  }

  if (topic.value === "") {
    document.getElementById("topicError").textContent = "Please select a topic";
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  return isValid;
}