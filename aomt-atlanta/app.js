document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-item").forEach((other) => {
      other.setAttribute("aria-expanded", "false");
    });

    item.setAttribute("aria-expanded", String(!isOpen));
  });
});
