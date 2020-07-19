// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  //devour button click
  $(".devour").on("click", function () {
    const id = $(this).data("id");

    const devourState = { value: true };

    // Send the PUT request.
    $.ajax(`/api/burger/${id}`, {
      type: "PUT",
      data: JSON.stringify(devourState),
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      location.reload();
    });
  });

  //form submit
  $(".create-form").on("submit", (event) => {
    event.preventDefault();
    if ($("#bg").val().trim() === null || $("#bg").val().trim() === " " || $("#bg").val().trim() === "") {
      alert("Burger Name cannot be empty. Please enter a burger name");
    } else {
      const newBurger = {
        name: $("#bg").val().trim(),
        isDevour: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        location.reload();
      });
    }
  });
});
