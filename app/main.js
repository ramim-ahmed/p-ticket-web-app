const seats = getElementsWithClass("seat");
const couponApplyButton = getElementWithId("coupon_apply_button");
const phoneNumberInput = getElementWithId("phone_number");
const continueButton = getElementWithId("continue");
const buyTicketsButton = getElementWithId("buy_tickets");
const couponCodefifteen = "NEW15";
const couponCodeTwenty = "Couple 20";
phoneNumberInput.addEventListener("input", function (e) {
  const counting = getElementWithId("counting").innerText;
  passengerNumber = e.target.value;
  if (e.target.value && Number(counting) > 0) {
    const nextButton = getElementWithId("next_button");
    nextButton.disabled = false;
  }
});

function bookedSeat(id) {
  const bookedSeatElement = getElementWithId(id);
  bookedSeatElement.disabled = true;
  if (bookedSeatElement.disabled === true) {
    bookedSeatElement.style.background = "#1DD100";
    bookedSeatElement.style.color = "#ffffff";
  }
}
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const ticketNumber = e.target.innerText;
    const counting = getElementWithId("counting");
    if (Number(counting.innerText) < 4) {
      appendSelectionTicket(ticketNumber);
      bookedSeat(ticketNumber);
      const totalPrice = getElementWithId("total_price");
      setInnetText(totalPrice, Number(totalPrice.innerText) + 550);
      const counting = getElementWithId("counting");
      setInnetText(counting, Number(counting.innerText) + 1);
      const grand_total = getElementWithId("grand_price");
      const grand_total_amount = Number(totalPrice.innerText);
      setInnetText(grand_total, grand_total_amount);
      const totalSeat = getElementWithId("total_seat");
      setInnetText(totalSeat, Number(totalSeat.innerText) - 1);
      if (Number(counting.innerText) === 4) {
        couponApplyButton.disabled = false;
      }
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
    const discountAmountContainer = getElementWithId(
      "discount_amount_container"
    );
    discountAmountContainer.classList.remove("hidden");
  } else if (counponInputUserValue === couponCodeTwenty) {
    const totalPrice = getElementWithId("total_price");
    const discount_amount = (Number(totalPrice.innerText) * 20) / 100;
    const discountElement = getElementWithId("discount_amount");
    setInnetText(discountElement, discount_amount);
    const grandTotalElement = getElementWithId("grand_price");
    const grandTotal = Number(grandTotalElement.innerText) - discount_amount;
    setInnetText(grandTotalElement, grandTotal);
    const couponContainer = getElementWithId("coupon_container");
    couponContainer.classList.add("hidden");
    const discountAmountContainer = getElementWithId(
      "discount_amount_container"
    );
    discountAmountContainer.classList.remove("hidden");
  } else {
    alert("Coupon Code Invalid!!");
    couponInput.value = "";
  }
});

buyTicketsButton.addEventListener("click", function (e) {
  e.target.href = "#paribahan";
});
