class Register {
    constructor() {
        this.id = ""
        this.email = "";
        this.password = "";
        this.state = "";
    }

    render() {
        if (localStorage.getItem("user")) {
            let userData = JSON.parse(localStorage.getItem("user"));
            document.title = "Ordinateur de " + userData.email;
            document.getElementById("register-show").style.display = "none";
            document.getElementById("login-show").style.display = "flex";
            return;
        }
        let registerBtn = document.getElementById("register");
        registerBtn.addEventListener("click", () => {
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
        this.register();
        });
    }

    register() {
        this.id = this.generateId()
        
        let formData = {
        email: this.email,
        password: this.password,
        id: this.id
        };
        let jsonData = JSON.stringify(formData);
        localStorage.setItem("user", jsonData);
        
        this.state = "User registered successfully!";
        alert(this.state);
        document.getElementById("register-show").style.display = "none";
        document.getElementById("login-show").style.display = "flex";
    }

    generateId() {
        let randomId = "";
        const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 10; i++) {
        randomId += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }

        return randomId;
    }
}