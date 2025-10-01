      let loginForm = document.querySelector("form");
      loginForm.addEventListener("submit", (e) => {
        let mail = document.getElementById("mail").value.trim();
        let pass = document.getElementById("pass").value.trim();

        document.getElementById("mailError").innerHTML = "";
        document.getElementById("passError").innerHTML = "";

        let valid = true;
        e.preventDefault();

        if (mail === "") {
          document.getElementById("mailError").innerText =
            "mail id is mandatory";
          valid = false;
        }
        let mailEr = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!mail.match(mailEr)) {
          document.getElementById("mailError").innerText =
            "enter valid mail Id";
          valid = false;
        }

        if (pass === "") {
          document.getElementById("passError").innerText =
            "password is manadatory";
          valid = false;
        }
        if (pass.length < 6 || pass.length > 15) {
          document.getElementById("passError").innerText =
            "password should between 6 to 15 characters";
          valid = false;
        }

        if (valid) {
          let user = JSON.parse(localStorage.getItem("signupData"));
          if (!user) {
            alert("no user found");
          }
          if (mail === user.Email && pass === user.password) {
            alert("login succesfull");
            window.location.href = "Home.html";
          } else {
            alert("invalid credentials");
          }
        }
      });