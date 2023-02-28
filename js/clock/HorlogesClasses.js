//Partie heure
class Datetime{
    weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

    datetime;
    today = new Date();
    time = this.timeToStr(this.today.getHours(), this.today.getMinutes(), this.today.getSeconds());
    date = this.weekday[this.today.getDay()] + " " + this.today.getDate() + " " + this.monthNames[this.today.getMonth()] + " " + this.today.getFullYear() ;

    divT = document.getElementById("time");
    divD = document.getElementById("date");

    constructor(){
        this.divT.innerHTML = this.time;
        this.divD.innerHTML = this.date;

        this.datetime = setInterval(() => {
            let today2 = new Date();
        
            let time2 = this.timeToStr(today2.getHours(), today2.getMinutes(), today2.getSeconds());
            this.divT.innerHTML = time2;
        }, 1000);
    }

    timeToStr(hour, min, sec){
        if(hour < 10){
            hour = "0" + hour;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        return hour + " : " + min + " : " + sec;
    }

    dropInterval(){
        clearInterval(this.datetime);
    }
}

class Chrono{
    btnST = document.getElementById("btn-start-stop");
    btnRR = document.getElementById("btn-reset-round");

    mil = 0;
    sec = 0;
    min = 0;
    hour = 0;
    isOn = false;
    chrono;
    nbrTour = 0;

    constructor(){
        this.btnST.addEventListener('click', e => {
            if(this.sec == 0){
                this.btnRR.style.display = 'block';
            }
            if(!this.isOn){
                this.btnRR.style.backgroundImage = "url('imgs/round.svg')";
                this.start();
                this.btnST.style.backgroundImage = "url('imgs/stop.svg')";
            }else{
                this.btnRR.style.backgroundImage = "url('imgs/reset.svg')";
                this.stop();
                this.btnST.style.backgroundImage = "url('imgs/start.svg')";
            }
        });

        this.btnRR.addEventListener('click', e => {
            let div = document.getElementById("listTour");
            if(this.isOn){
                this.nbrTour += 1;
                let tours = document.createElement("span");
                tours.innerHTML = "<div>Tour n°" + this.nbrTour + "</div> " + this.hour + " : " + this.min + " : " + this.sec + " . " + this.mil;
                div.appendChild(tours);
            }else{
                div.innerHTML = '';
                this.btnRR.style.display = 'none';
                this.clear();
            }
        });
    }

    start(){
        this.isOn = true;
        this.chrono =  setInterval(() => {
            this.mil += 1;
            if(this.mil == 100){
                this.sec += 1;
                this.mil = 0;
            }
            if(this.sec == 60){
                this.min += 1;
                this.sec = 0;
            }
            if(this.min == 60){
                this.hour += 1;
                this.min = 0;
            }
            this.setTextChrono();
        }, 10);
    }

    stop(){
        this.isOn = false;
        clearInterval(this.chrono);
    }

    clear(){
        this.nbrTour = 0;
        this.mil = 0;
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
        this.setTextChrono();
    }

    setTextChrono(){
        let visu = document.getElementById("chrono");
        visu.innerHTML = this.hour + " : " + this.min + " : " + this.sec + " . " + this.mil;
    }

    dropInterval(){
        clearInterval(this.chrono);
    }
}

class Timer{
    //BTN TIMER
    startBtn = document.getElementById("timer-start-stop");
    resetBtn = document.getElementById("timer-reset");

    //ATT TIMER
    timer;
    isOn = false;
    launch = false;
    sec = 0;
    min = 0;
    nptS = document.getElementById("input-right");
    nptM = document.getElementById("input-left");
    showTimer = document.getElementById("show-timer");
    timerForm = document.getElementById("timer-form");

    constructor(){
        this.startBtn.addEventListener('click', e => {
            if(!this.launch){
                this.getTime();
                this.setTextTimer();
            
                if(this.sec > 0 || this.min > 0){
                    this.start();
                    this.launch = true;
                    this.startBtn.style.backgroundImage = "url('imgs/stop.svg')";
                    this.resetBtn.style.display = "block";
                    this.showTimer.style.display = "block";
                    this.timerForm.style.display = "none";
                }
                return;
            }
            if(this.isOn){
                this.startBtn.style.backgroundImage = "url('imgs/start.svg')";
                this.isOn = false;
            }else{
                this.startBtn.style.backgroundImage = "url('imgs/stop.svg')";
                this.isOn = true;
            }
        });
        this.resetBtn.addEventListener('click', e => {
            this.min = 0;
            this.sec = 0;
            this.setTextTimer();
            this.reset();
            this.btnDisplay();
            this.showTimer.style.display = "none";
            this.timerForm.style.display = "flex";
            this.launch = false;
        });
    }

    start(){
        this.isOn = true;
        this.timer = setInterval(() => {
            if(this.isOn){
                this.sec -= 1;
                if(this.sec == -1){
                    this.min -= 1;
                    this.sec = 59;
                }
                this.setTextTimer();
                if(this.sec == 0 && this.min == 0){
                    this.launch = false;
                    this.btnDisplay();

                    clearInterval(this.timer);
                    let audio = new Audio('audio/timer.mp3');
                    audio.play();
                    this.showTimer.style.display = "none";
                    this.timerForm.style.display = "flex";
                }
            }
        }, 1000);
    }

    reset(){
        clearInterval(this.timer);
    }

    getTime(){
        this.sec = this.nptS.value;
        this.min = this.nptM.value;
    }

    setTextTimer(){
        let divTimer = document.getElementById("show-timer");
        divTimer.innerHTML = this.min + " : " + this.sec;

    }

    btnDisplay(){
        this.startBtn.style.backgroundImage = "url('imgs/start.svg')";
        this.resetBtn.style.display = "none";
    }

    dropInterval(){
        clearInterval(this.timer);
    }
}