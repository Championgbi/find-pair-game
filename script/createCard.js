const cardToHtml = (card) => {
  const { number, back, img } = card;
  return `
  <li class="card " data-number=${number}>
    <div class="card-side face">
      <img src="${back}">
    </div>
    <div class="card-side back">
      <img src="${img}">
    </div>
  </li>
  `;
};

export { cardToHtml };
