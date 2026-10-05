
document.addEventListener("DOMContentLoaded", () => {
  // Filtros del catálogo
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".service-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      cards.forEach(card => {
        card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
      });
    });
  });

  // Modal de Bootstrap
  const modal = document.getElementById("serviceModal");
  if (modal) {
    modal.addEventListener("show.bs.modal", event => {
      const button = event.relatedTarget;
      const service = button?.getAttribute("data-service") || "Servicio SELIA";
      document.getElementById("serviceModalTitle").textContent = service;
      document.getElementById("serviceModalText").textContent =
        `Consultá disponibilidad, características y detalles de ${service.toLowerCase()} a través de la página de turnos o contacto.`;
    });
  }

  // Demo de validación/feedback del formulario de turnos
  const turnoForm = document.getElementById("turnoForm");
  if (turnoForm) {
    turnoForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!turnoForm.checkValidity()) {
        turnoForm.classList.add("was-validated");
        return;
      }
      document.getElementById("formMessage").classList.remove("d-none");
      turnoForm.reset();
      turnoForm.classList.remove("was-validated");
    });
  }
});
