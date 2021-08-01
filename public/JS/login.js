$(function () {
  var showClass = "show";

  $("input")
    .on("checkval", function () {
      var label = $(this).prev("label");
      if (this.value !== "") {
        label.addClass(showClass);
      } else {
        label.removeClass(showClass);
      }
    })
    .on("keyup", function () {
      $(this).trigger("checkval");
    });
});

$("#login-form").on("submit", async (event) => {
  event.preventDefault();

  const email = $("#log-email").val();
  const password = $("#log-password").val();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("dashboard");
    } else {
      alert(response.statusText);
    }
  }
});
