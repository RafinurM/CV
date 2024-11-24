const instrumentTemplate = document
  .querySelector("#instrument_template")
  .content.querySelector(".card_item");

export function createInstrument(instrumentData) {
  const instrument = instrumentTemplate.cloneNode(true);
  const instrumentLink = instrument.querySelector("a");
  const instrumentImg = instrument.querySelector("img");
  const instrumentDescription = instrument.querySelector(
    ".card_item-image-description"
  );

  instrumentLink.setAttribute("href", instrumentData.link); // link
  instrumentImg.setAttribute("src", instrumentData.icon);
  instrumentImg.setAttribute("alt", instrumentData.name);
  instrumentDescription.textContent = instrumentData.name;
  return instrument;
}
