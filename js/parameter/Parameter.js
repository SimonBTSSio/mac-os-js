class Parameter extends App{
    loader = new Loader();
    batterie = document.getElementById("batterie");
    eYear = true;
    eMonth = true;
    eDay = true;

    eHour = true;
    eMin = true;
    eSec= true;

    constructor(){
        super("imgs/parameter.png", "Parametres");
        this.window.setViewHtml(this.htmlApp());
    }

    openApp(){
        super.openApp();
        document.getElementById("batterie-btn").addEventListener("change", () => {
            if(this.loader.showBat){
                this.batterie.style.display = "none";
                this.loader.showBat = false;
            }else{
                this.batterie.style.display = "inline";
                this.loader.showBat = true;
            }
        });
        this.setDateListener();
        this.setTimeListener();
        document.getElementById("latency-btn").addEventListener("change", () => {
            if(this.loader.lantecy.show){
                this.loader.lantecy.latence.style.display = "none";
                this.loader.lantecy.show = false;
            }else{
                this.loader.lantecy.latence.style.display = "inline";
                this.loader.lantecy.show = true;
            }
        });
        document.getElementById("btn-lat").addEventListener("click", () => {
            let serv = document.getElementById("input-lat").value;
            this.loader.lantecy.serv = serv;
            document.getElementById("span-lat").innerHTML = "Le serveur : " + serv + " a bien été ajouté";
            document.getElementById("input-lat").value = "";
        });
    }

    setDateListener(){
        document.getElementById("year-btn").addEventListener("change", () => {
            if(this.eYear){
                this.loader.dateTime.isYear = false;
                this.loader.dateBar.innerHTML = this.loader.dateTime.getDate();
                this.eYear = false;
            }else{
                this.loader.dateTime.isYear = true;
                this.loader.dateBar.innerHTML = this.loader.dateTime.getDate();
                this.eYear = true;
            }
        });

        document.getElementById("month-btn").addEventListener("change", () => {
            if(this.eMonth){
                this.loader.dateTime.isMonth = false;
                this.loader.dateBar.innerHTML = this.loader.dateTime.getDate();
                this.eMonth = false;
            }else{
                this.loader.dateTime.isMonth = true;
                this.loader.dateBar.innerHTML = this.loader.dateTime.getDate();
                this.eMonth = true;
            }
        });

        document.getElementById("jour-btn").addEventListener("change", () => {
            if(this.eDay){
                this.loader.dateTime.isDay = false;
                this.loader.dateBar.innerHTML = this.loader.dateTime.getDate();
                this.eDay = false;
            }else{
                this.loader.dateTime.isDay = true;
                this.loader.dateBar.innerHTML = this.loader.dateTime.getDate();
                this.eDay = true;
            }
        });
    }

    setTimeListener(){
        document.getElementById("hour-btn").addEventListener("change", () => {
            if(this.eHour){
                this.loader.dateTime.isHour = false;
                this.eHour = false;
            }else{
                this.loader.dateTime.isHour = true;
                this.eHour = true;
            }
        });
        document.getElementById("min-btn").addEventListener("change", () => {
            if(this.eMin){
                this.loader.dateTime.isMin = false;
                this.eMin = false;
            }else{
                this.loader.dateTime.isMin = true;
                this.eMin = true;
            }
        });
        document.getElementById("sec-btn").addEventListener("change", () => {
            if(this.eSec){
                this.loader.dateTime.isSec = false;
                this.eSec = false;
            }else{
                this.loader.dateTime.isSec = true;
                this.eSec = true;
            }
        });
    }

    closeApp(){
        this.window.setViewHtml(this.htmlApp());
    }

    htmlApp(){
        return `
        <div class="parameter">
            <h1>Parametres</h1>
            <h2>Affichage de la batterie</h2>
            <span>Afficher le niveau de batterie</span><input type="checkbox" id="batterie-btn" name="batterie" checked>
            <h2>Affichage de la date</h2>
            <span>Afficher l'année</span><input type="checkbox" id="year-btn" name="batterie" checked><br>
            <span>Afficher du mois</span><input type="checkbox" id="month-btn" name="batterie" checked><br>
            <span>Afficher le jour</span><input type="checkbox" id="jour-btn" name="batterie" checked>
            <h2>Affichage de l'heure</h2>
            <span>Afficher l'heure</span><input type="checkbox" id="hour-btn" name="batterie" checked><br>
            <span>Afficher les minutes</span><input type="checkbox" id="min-btn" name="batterie" checked><br>
            <span>Afficher les secondes</span><input type="checkbox" id="sec-btn" name="batterie" checked>
            <h2>Parametre latence</h2>
            <span>Afficher la latence</span><input type="checkbox" id="latency-btn" name="batterie" checked><br>
            <label>Changer de serveur</label><br>
            <br>
            <span id="span-lat"></span><br>
            <input type="text" id="input-lat"></input><br>
            <button id="btn-lat">Valider</button>
        </div>
        `;
    }
}