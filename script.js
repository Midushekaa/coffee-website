document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your order! We'll contact you shortly.");
    form.reset();
  });
});
