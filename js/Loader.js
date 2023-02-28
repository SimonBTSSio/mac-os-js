class Loader{
    pourcentage = document.getElementById('pourcentage');
    dateTime = new LDatetime();
    lantecy = new Lantecy();
    dateBar = document.getElementById("date-bar");
    showBat = true;

    constructor(){

        this.dateBar.innerHTML = this.dateTime.getDate();

        let pourcentage = document.querySelector('.pourcentage');
        navigator.getBattery().then((battery) => {
            let calcul = battery.level * 100 + "%";
            pourcentage.style.height = calcul;
        });
        this.setListenerBat();
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