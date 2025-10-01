      let form = document.querySelector("form");
      form.addEventListener('submit', (e) => {
       
      let name = document.getElementById("user").value.trim();
      let pass = document.getElementById("pass").value.trim();
      let mail = document.getElementById("mail").value.trim();
      let num = document.getElementById("num").value.trim();
      let cpass=document.getElementById('cPass').value.trim();

      document.getElementById("userError").innerText = "";
      document.getElementById("mailError").innerText = "";
      document.getElementById("passError").innerText = "";
      document.getElementById("numError").innerText = "";
      document.getElementById('cPassError').innerHTML="";

        let valid = true;
         e.preventDefault();

        if (name === "") {
          document.getElementById("userError").innerText =
            "username is mandatory";
          valid = false;
        }

      if(name.length < 3 || name.length > 15) {
          document.getElementById("userError").innerText =
            "username must be between 3 to 15 characters";
          valid = false;
        }
      if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(name)) {
          document.getElementById("userError").innerText =
            "username should contain uppercase,lowercase and numbers";
          valid = false;
        }


        let numEr = /^[0-9]{10}$/;
        if (!num.match(numEr)) {
          document.getElementById("numError").innerText = "enter valid number";
          valid = false;
        }
        if (num === "") {
          document.getElementById("numError").innerText = "number is mandatory";
        }

        if (pass === "") {
          document.getElementById("passError").innerText =
            "password is manadatory";
          valid = false;
        }
        if (pass.length < 6|| pass.length>15) {
          document.getElementById("passError").innerText =
            "password should between 6 to 15 characters";
          valid = false;
        }

        if(pass!==cpass)
        {
          document.getElementById('cPassError').innerHTML="password should match"
          valid=false;
        }

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

        if (valid) {
          let userData = {
            username: name,
            password: pass,
            Email: mail,
            Number: num,
          };
           localStorage.setItem("signupData", JSON.stringify(userData));
          alert("signup is Successfull");
          location.href = "login.html";
        }
       
      });