const seats = getElementsWithClass("seat");
const couponApplyButton = getElementWithId("coupon_apply_button");
const couponCodefifteen = "NEW15";
const couponCodeTwenty = "Couple 20";
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const ticketNumber = e.target.innerText;
    const counting = getElementWithId("counting");
    if (Number(counting.innerText) < 4) {
      appendSelectionTicket(ticketNumber);
      const totalPrice = getElementWithId("total_price");
      setInnetText(totalPrice, Number(totalPrice.innerText) + 550);
      const counting = getElementWithId("counting");
      setInnetText(counting, Number(counting.innerText) + 1);
      const grand_total = getElementWithId("grand_price");
      const grand_total_amount = Number(totalPrice.innerText);
      setInnetText(grand_total, grand_total_amount);
      const totalSeat = getElementWithId("total_seat");
      setInnetText(totalSeat, Number(totalSeat.innerText) - 1);
    } else {
      alert("Ticket buying over! maximum buy 4 tickets");
    }
  });
}

function appendSelectionTicket(ticketNumber) {
  const selectionContainer = getElementWithId("seat_selection_container");
  const div = createElementByTag("div");
  div.classList.add("flex", "justify-between", "items-center", "mt-4");
  const ticketNumberElementCreate = createElementByTag("p");
  setInnetText(ticketNumberElementCreate, ticketNumber);
  const ticketClassElementCreate = createElementByTag("p");
  setInnetText(ticketClassElementCreate, "Economy");
  const ticketPriceElementCreate = createElementByTag("p");
  setInnetText(ticketPriceElementCreate, 550);
  div.appendChild(ticketNumberElementCreate);
  div.appendChild(ticketClassElementCreate);
  div.appendChild(ticketPriceElementCreate);
  selectionContainer.appendChild(div);
}

couponApplyButton.addEventListener("click", function () {
  const couponInput = getElementWithId("coupon_input");
  const counponInputUserValue = couponInput.value;
  if (counponInputUserValue === couponCodefifteen) {
    const totalPrice = getElementWithId("total_price");
    const discount_amount = (Number(totalPrice.innerText) * 15) / 100;
    const discountElement = getElementWithId("discount_amount");
    setInnetText(discountElement, discount_amount);
    const grandTotalElement = getElementWithId("grand_price");
    const grandTotal = Number(grandTotalElement.innerText) - discount_amount;
    setInnetText(grandTotalElement, grandTotal);
    const couponContainer = getElementWithId("coupon_container");
    couponContainer.classList.add("hidden");
  }
  if (counponInputUserValue === couponCodeTwenty) {
    const totalPrice = getElementWithId("total_price");
    const discount_amount = (Number(totalPrice.innerText) * 20) / 100;
    const discountElement = getElementWithId("discount_amount");
    setInnetText(discountElement, discount_amount);
    const grandTotalElement = getElementWithId("grand_price");
    const grandTotal = Number(grandTotalElement.innerText) - discount_amount;
    setInnetText(grandTotalElement, grandTotal);
    const couponContainer = getElementWithId("coupon_container");
    couponContainer.classList.add("hidden");
  }
});
