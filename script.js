const bookingFloor = document.getElementById("booking-floor");
const course = document.getElementById("course");
const courseHeading = document.getElementById("course-heading");
const courseInfo = document.getElementById("course-info");
const courseInfo2 = document.getElementById("course-info2");
const courseInfo3 = document.getElementById("course-info3");
const coursePrice = document.getElementById("course-price");
const courseImg = document.getElementById("course-image");
const bookingBtn = document.getElementById("booking-btn");

function goToBooking(type) {
  course.value = type;
  bookingFloor.scrollIntoView();
  course.dispatchEvent(new Event("change"));
}

course.addEventListener("change", () => {
  if (course.value === "mosaikk") {
    courseHeading.innerText = "Mosaikk";
    courseInfo.innerText =
      "Lag ditt eget fargerike mosaikkmotiv med små steiner i ulike farger og former. Dette er en rolig og kreativ workshop der du kan eksperimentere med mønster, fargekombinasjoner og uttrykk i ditt eget tempo. Du trenger ingen tidligere erfaring, og du får veiledning underveis dersom du ønsker det.";
    courseInfo2.innerText =
      "Når du er ferdig, sitter du igjen med et personlig mosaikkverk som du kan ta med hjem og stille ut.";
    courseInfo3.innerText =
      "Sett inkluderer: Ramme, treplate i A4-størrelse, små fargede steiner og gummi.";
    coursePrice.innerHTML = "Pris: 400 kr.";

    courseImg.src = "img/mosaikk.jpg";
    courseImg.alt = "Mosaikk bilde av stein";
  } else if (course.value === "akvarell") {
    courseHeading.innerText = "Akvarell";
    courseInfo.innerText =
      "Utforsk akvarellmaling og opplev hvordan vann og farger kan skape myke overganger og spennende uttrykk. Du får et akvarellpapir med designmal som gjør det enkelt å komme i gang, samtidig som du står fritt til å bruke egne farger og gjøre motivet personlig.";
    courseInfo2.innerText =
      "Workshopen passer både for nybegynnere og for deg som allerede har prøvd akvarell tidligere. Målet er å senke skuldrene, ha det hyggelig og skape noe du er fornøyd med.";
    courseInfo3.innerText =
      "Sett inkluderer: Ramme, akvarellpapir med designmal, akvarellfarger og pensler.";
    coursePrice.innerHTML = "Pris: 200 kr.";
    courseImg.src = "img/watercolorBig.jpg";
    courseImg.alt = "Person maler med akvarell";
  } else if (course.value === "lerret") {
    courseHeading.innerText = "Lerret";
    courseInfo.innerText =
      "Mal ditt eget kunstverk med akrylfarger og utforsk sterke farger, tydelige former og forskjellige maleteknikker. Designmalen gir deg et godt utgangspunkt, men du bestemmer selv hvilke farger og detaljer du ønsker å legge til.";
    courseInfo2.innerText =
      "Akrylmaling er lett å arbeide med og tørker raskt, noe som gjør denne workshopen godt egnet både for nybegynnere og mer erfarne deltakere. Du får selvfølgelig ta med deg det ferdige kunstverket hjem.";
    courseInfo3.innerText =
      "Sett inkluderer: Ramme, akrylpapir med designmal, akrylfarger og pensler.";
    coursePrice.innerHTML = "Kr. 300,-";
    courseImg.src = "img/acryl.jpg";
    courseImg.alt = "Person maler med acryl";
  }
});

// ------------------------
//    DIALOG - Booking
// ------------------------
const openDialog = document.getElementById("open-dialog");
const bookingDialog = document.getElementById("booking-dialog");
const closeDialog = document.getElementById("close-dialog");
const courseBooking = document.getElementById("courseBooking");
const finishBooking = document.getElementById("bestill");
const bestillingForm = document.getElementById("bestilling-form");

const openTakk = document.getElementById("takk-bestilling");
const takkBestilling = document.getElementById("takk-bestilling");
const lukkBestilling = document.getElementById("lukk-bestilling");
const kvittering = document.getElementById("kvittering");

finishBooking.addEventListener("click", (event) => {
  if (bestillingForm.checkValidity()) {
    event.preventDefault();
    bookingDialog.close();
    // Lage kvittering for bestillingsbekreftelsen.
    const formData = new FormData(bestillingForm);

    const navn = formData.get("name");
    console.log(navn);
    const epost = formData.get("email");
    const telefon = formData.get("telefon");
    const kurs = formData.get("courseBooking");
    const dato = formData.get("dato");
    const antall = formData.get("antall");
    const wishes = formData.get("wishes");

    const kvitteringText = document.createElement("section");
    const textNavn = document.createElement("p");
    textNavn.textContent = `Navn: ${navn}`;
    const textEpost = document.createElement("p");
    textEpost.textContent = `Epost: ${epost}`;
    const textTelefon = document.createElement("p");
    textTelefon.textContent = `Telefon: ${telefon}`;
    const textKurs = document.createElement("p");
    textKurs.textContent = `Kunstform: ${kurs}`;
    const textDato = document.createElement("p");
    textDato.textContent = `Dato og tidspunkt ${dato}`;
    const textAntall = document.createElement("p");
    textAntall.textContent = `Antall deltakere: ${antall}`;
    const textWishes = document.createElement("p");
    textWishes.textContent = `Spesielle ønsker: ${wishes}`;

    kvitteringText.append(
      textNavn,
      textEpost,
      textTelefon,
      textKurs,
      textDato,
      textAntall,
      textWishes,
    );
    kvittering.appendChild(kvitteringText);

    takkBestilling.showModal();
  } else {
    bestillingForm.reportValidity();
  }
});
lukkBestilling.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  takkBestilling.close();
});
openDialog.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
  bookingDialog.showModal();
  courseBooking.value = course.value;
});

closeDialog.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  bookingDialog.close();
});
bookingDialog.addEventListener("close", () => {
  document.body.classList.remove("no-scroll");
});

// ------------------------
//    DIALOG - Tilbakemelding
// ------------------------

const openTilbakemeldingDialog = document.getElementById(
  "open-tilbakemeldings-dialog",
);
const tilbakemeldingDialog = document.getElementById("tilbakemelding-dialog");
const closeTilbakemelding = document.getElementById(
  "close-tilbakemelding-dialog",
);
const melding = document.getElementById("melding");
const tilbakemeldingForm = document.getElementById("tilbakemelding-form");
const sendTilbakemelding = document.getElementById("send-tilbakemelding");

openTilbakemeldingDialog.addEventListener("click", () => {
  tilbakemeldingDialog.showModal();
  document.body.classList.add("no-scroll");
});
closeTilbakemelding.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  tilbakemeldingDialog.close();
});
sendTilbakemelding.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(tilbakemeldingForm);
  const navn = formData.get("name");
  console.log(navn);
  const epost = formData.get("email");
  const kurs = formData.get("courseBooking");
  const favorittdel = formData.get("favorittdel");
  const forbedring = formData.get("forbedring");
  const anbefaling = formData.get("anbefaling");
  const tillatelse = formData.get("tillatelse");
  if (tillatelse) {
    const tilbakemeldingText = document.createElement("section");
    const textNavn = document.createElement("p");
    textNavn.textContent = `Navn: ${navn}`;
    const textEpost = document.createElement("p");
    textEpost.textContent = `Epost: ${epost}`;
    const textKurs = document.createElement("p");
    textKurs.textContent = `Kunstform: ${kurs}`;
    const textFavorittdel = document.createElement("p");
    textFavorittdel.textContent = `Beste del? ${favorittdel}`;
    const textForbedring = document.createElement("p");
    textForbedring.textContent = `Hva kan forbedres? ${forbedring}`;
    const textAnbefaling = document.createElement("p");
    textAnbefaling.textContent = `Anbefaler: ${anbefaling}`;
    tilbakemeldingText.append(
      textNavn,
      textEpost,
      textKurs,
      textFavorittdel,
      textForbedring,
      textAnbefaling,
    );
    melding.appendChild(tilbakemeldingText);
  }
  document.body.classList.remove("no-scroll");
  tilbakemeldingDialog.close();
});
tilbakemeldingForm.addEventListener("close", () => {
  document.body.classList.remove("no-scroll");
});

// ----------------
//    Galleri
// -------------------

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("lightbox-close");
const lightboxText = document.getElementById("lightbox-text");

const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach((Image) => {
  Image.addEventListener("click", () => {
    lightboxImage.src = Image.src;
    lightboxImage.alt = Image.alt;
    lightboxText.innerText = Image.alt;
    lightbox.showModal();
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.close();
});
