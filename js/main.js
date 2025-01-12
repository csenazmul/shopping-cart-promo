// const promoCodes = {
//     ostad10: 0.10, // 10% discount
//     ostad5: 0.05,  // 5% discount
// };

// function applyPromoCode() {
//     const promoCodeInput = document.getElementById("promo-code").value.trim();
//     const subtotal = parseFloat(document.getElementById("cart-total").textContent);
//     const discountElement = document.getElementById("discount");
//     const finalTotalElement = document.getElementById("final-total");
//     const promoMessage = document.getElementById("promo-message");

//     if (promoCodes[promoCodeInput]) {
//         const discountRate = promoCodes[promoCodeInput];
//         const discount = subtotal * discountRate;
//         const finalTotal = subtotal - discount;

//         document.getElementById("subtotal").textContent = subtotal.toFixed(2);
//         discountElement.textContent = discount.toFixed(2);
//         finalTotalElement.textContent = finalTotal.toFixed(2);

//         promoMessage.textContent = "Promo code applied successfully!";
//         promoMessage.classList.remove("text-danger");
//         promoMessage.classList.add("text-success");
//     } else {
//         promoMessage.textContent = "Invalid promo code!";
//         promoMessage.classList.remove("text-success");
//         promoMessage.classList.add("text-danger");
//     }
// }

// document.getElementById("apply-promo").addEventListener("click", applyPromoCode);

  

const promoCodes = {
    ostad10: 0.10,
    ostad5: 0.05,
  };
  
  document.getElementById("apply-promo").addEventListener("click", () => {
    const promoInput = document.getElementById("promo-code").value.trim();
    const subtotal = parseFloat(document.getElementById("subtotal").textContent);
    const discountSpan = document.getElementById("discount");
    const totalSpan = document.getElementById("total");
    const promoMessage = document.getElementById("promo-message");
  
    if (promoCodes[promoInput]) {
      const discount = subtotal * promoCodes[promoInput];
      const total = subtotal - discount;
  
      discountSpan.textContent = discount.toFixed(2);
      totalSpan.textContent = total.toFixed(2);
      promoMessage.textContent = "Promo code applied successfully!";
      promoMessage.style.color = "green";
    } else {
      promoMessage.textContent = "Invalid promo code!";
      promoMessage.style.color = "red";
    }
  });
  