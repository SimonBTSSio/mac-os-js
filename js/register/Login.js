class Login {
    loginPage = document.getElementById("login-show");

    constructor() {
      this.email = "";
      this.password = "";
      this.id = "";
      this.state = "";
    }
  
    static generateId() {
      let randomId = "";
      const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
      for (let i = 0; i < 10; i++) {
        randomId += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      }
  
      return randomId;
    }
  
    render() {
      let loginBtn = document.getElementById("login");
      loginBtn.addEventListener("click", () => {
        this.email = document.getElementById("email-log").value;
        this.password = document.getElementById("password-log").value;
        this.id = Login.generateId(); // génération de l'ID lors de l'enregistrement
        console.log(this);
        this.login();
      });
    }
  
    login() {
      let storedData = localStorage.getItem("user");
      if (storedData) {
        let userData = JSON.parse(storedData);
        if (userData.email === this.email && userData.password === this.password) {
          document.title = "Ordinateur de " + this.email;
          this.state = "User logged in successfully!";
          alert(this.state);
          console.log(this.getUserId()); // récupération de l'ID lors de la connexion
          this.loginPage.style.display = "none";
        } else {
          this.state = "Incorrect email or password.";
          alert(this.state);
        }
      } else {
        this.state = "User not found.";
        alert(this.state);
      }
    }
  
    getUserId() {
      let storedData = localStorage.getItem("user");
      if (storedData) {
        let userData = JSON.parse(storedData);
        return userData.id;
      } else {
        return "No user data found.";
      }
    }
  }