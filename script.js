// Smooth scroll from hero button
document.querySelector(".cta-btn").addEventListener("click", function() {
  document.querySelector("#order").scrollIntoView({ behavior: "smooth" });
});

// Scroll to order form from product cards
const orderButtons = document.querySelectorAll(".order-now");
orderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productName = btn.getAttribute("data-product");
    document.querySelector("#order").scrollIntoView({ behavior: "smooth" });
    const nameField = document.querySelector('input[name="name"]');
    if (nameField && !nameField.value) {
      nameField.value = `${productName} অর্ডার`;
    }
  });
});

// Form submit success message
const form = document.getElementById("order-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    form.reset();
    document.getElementById("form-message").style.display = "block";
  } else {
    alert("দুঃখিত, কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
});

// ================= Order Button Logic =================
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    const price = button.getAttribute('data-price');
    const form = document.querySelector('form');

    form.scrollIntoView({ behavior: 'smooth' });

    // Auto-fill product info in form
    if (!document.querySelector('input[name="product"]')) {
      const productInput = document.createElement('input');
      productInput.type = 'hidden';
      productInput.name = 'product';
      form.appendChild(productInput);
    }

    if (!document.querySelector('input[name="price"]')) {
      const priceInput = document.createElement('input');
      priceInput.type = 'hidden';
      priceInput.name = 'price';
      form.appendChild(priceInput);
    }

    form.querySelector('input[name="product"]').value = product;
    form.querySelector('input[name="price"]').value = price;
  });
});

