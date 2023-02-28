class Clock extends App{
    datetime;
    chrono;
    timer;

    constructor(){
        super("imgs/horloge.svg", "Horloge");
        this.window.setViewHtml(this.htmlApp());
    }

    openApp(){
        super.openApp();
        let btn = document.getElementsByClassName("clock-btn");

        for(let aBtn of btn){
            aBtn.addEventListener("click", event =>{
                for(let aBtnn of btn){
                    aBtnn.classList.remove();
                    aBtnn.className = "clock-btn";
                }

                aBtn.className = "clock-btn active";
                let seg = document.getElementsByClassName("seg")[0].children;
                
                for(let aSeg of seg){
                    aSeg.style.zIndex = "1";
                }
                document.getElementsByClassName(aBtn.id)[0].style.zIndex = "2";
            });
        }
        this.datetime = new Datetime();
        this.chrono = new Chrono();
        this.timer = new Timer();
        let btn2 = document.getElementsByClassName("btn-up-down");

        for(let aBtn of btn2){
            aBtn.addEventListener("click", event =>{
                let input = document.getElementById(aBtn.dataset.position);
                if(input.value == "" && aBtn.dataset.state != "down"){
                input.value = 1;
                return;
                }
                if(aBtn.dataset.state == "up"){
                input.value = Number(input.value) + 1;
                return;
                }
                
                if(input.value > 0){
                input.value = Number(input.value) - 1;
                }
            });
        }
    }

    closeApp(){
        this.datetime.dropInterval();
        this.chrono.dropInterval();
        this.timer.dropInterval();
        delete this.datetime;
        delete this.chrono;
        delete this.timer;
        this.window.setViewHtml(this.htmlApp());
    }

    htmlApp(){
        return `
        <nav class="clock-header">
            <div id="heure" class="clock-btn active">
                HEURE / DATE
            </div>
            <div id="chronometre" class="clock-btn">
                CHRONOMETRE
            </div>
            <div id="minuteur" class="clock-btn">
                MINUTEUR
            </div>
        </nav>
        <section class="seg">
            <div class="heure">
                <div id="time">14 : 18 : 26</div>
                <div id="date">Mardi 10 Janvier 2023</div>
            </div>
            <div class="chronometre">
                <div class="chrono">
                    <span id="chrono">0 : 0 : 0.0</span>
                    <div id="chrono-btn">
                        <div id="btn-start-stop"></div><div id="btn-reset-round"></div>
                    </div>
                    <div class="tour" id="listTour">
                    </div>
                </div>
            </div>
            <div class="minuteur">
                <div id="show-timer">
                    0 : 00
                </div>
                <div class="timer-form" id="timer-form">
                    <div class="timer-input">
                        <img src="imgs/btn-up-down.svg" class="btn-up-down" data-position="input-left" data-state="up">
                        <input type="number" value="0" min="0" max="60" id="input-left">
                        <img src="imgs/btn-up-down.svg" class="btn-up-down" data-position="input-left" data-state="down">
                    </div>
                    <div class="timer-input">
                        <img src="imgs/btn-up-down.svg" class="btn-up-down" data-position="input-right" data-state="up">
                        <input type="number" value="0" min="0" max="60" id="input-right">
                        <img src="imgs/btn-up-down.svg" class="btn-up-down" data-position="input-right" data-state="down">
                    </div>
                    </div>
                    <div class="timer-control">
                    <div id="timer-start-stop"></div>
                    <div id="timer-reset"></div>
                    </div>
            </div>
        `;
    }
}