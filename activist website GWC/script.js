document.addEventListener("DOMContentLoaded", function () {
  var submit = document.getElementById("submit");
  submit.addEventListener("click", submitcontact);

  function submitcontact() {
    var email = document.getElementById("email").value;
    if (email === "" || email.indexOf("@") === -1) {
      alert("Please enter a valid email address.");
      return; // Stop execution if email is invalid
    } else {
      document.getElementById("contact-section").innerHTML =
        "Your message is submitted <3";
    }
  }
});
