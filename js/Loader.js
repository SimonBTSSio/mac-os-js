class Loader{
    pourcentage = document.getElementById('pourcentage');
    dateTime = new LDatetime();
    lantecy = new Lantecy();
    dateBar = document.getElementById("date-bar");
    showBat = true;

    openClose = document.getElementById("open-close");
    viewClose = document.getElementById("close_app");
    closeOpen = false;

    c_lock = document.getElementById("c_lock");
    c_close = document.getElementById("c_close");

    constructor(){

        this.dateBar.innerHTML = this.dateTime.getDate();

        let pourcentage = document.querySelector('.pourcentage');
        navigator.getBattery().then((battery) => {
            let calcul = battery.level * 100 + "%";
            pourcentage.style.height = calcul;
        });
        this.setListenerBat();

        this.openClose.addEventListener("click", () => {
            if(this.closeOpen){
                this.viewClose.style.display = "none";
                this.closeOpen = false;
            }else{
                this.viewClose.style.display = "flex";
                this.closeOpen = true;
            }
        });

        this.c_lock.addEventListener("click", () => {
            document.getElementById("login-show").style.display = "flex";
        });

        this.c_close.addEventListener("click", () => {
            window.close();
        });
    }

    setListenerBat(){
        setInterval(() => {
            navigator.getBattery().then((battery) => {
                if(this.showBat){
                    let pourcentage = document.querySelector('.pourcentage');
                    let calcul = battery.level * 100 + "%";
                    pourcentage.style.height = calcul;
                }
            });
        }, 250000);
    }

    
}