document.querySelectorAll("form[data-mailto]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [];

    for (const [key, value] of data.entries()) {
      lines.push(`${key}: ${value}`);
    }

    const to = form.dataset.mailto;
    const subject = encodeURIComponent(form.dataset.subject || "Food recovery inquiry");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
});
