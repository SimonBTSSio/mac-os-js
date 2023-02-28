class LDatetime{

    datetime;
    //date entity
    today = new Date();
    day;
    month;
    year;
    isDay = true;
    isMonth = true;
    isYear = true;

    //time entity
    sec;
    min;
    hour;

    isSec = true;
    isMin = true;
    isHour = true;

    timeBar = document.getElementById("date-time");


    constructor(){
        this.setDate();

        this.setTime();
    }

    setTime(){
        this.sec = this.today.getSeconds();
        this.min = this.today.getMinutes();
        this.hour = this.today.getHours();
        let date = '';

        if(this.isHour){
            let hour = this.hour;
            date += hour;
        }

        if(this.isMin){
            let min = this.min;
            if (date.length != 0) {
                date += "." + min;
            }else{
                date += min;
            }
        }

        if(this.isSec){
            let sec = this.sec;
            if (date.length != 0) {
                date += "." + sec;
            }else{
                date += sec;
            }
        }
        this.timeBar.innerHTML = date;

        setInterval(() => {
            let today2 = new Date();
            this.sec = today2.getSeconds();
            this.min = today2.getMinutes();
            this.hour = today2.getHours();
            let date = '';
    
            if(this.isHour){
                let hour = this.hour;
                date += hour;
            }
    
            if(this.isMin){
                let min = this.min;
                if (date.length != 0) {
                    date += ":" + min;
                }else{
                    date += min;
                }
            }
    
            if(this.isSec){
                let sec = this.sec;
                if (date.length != 0) {
                    date += ":" + sec;
                }else{
                    date += sec;
                }
            }

            this.timeBar.innerHTML = date;
        }, 1000);
    }

    getTime(){
        return date;
    }
    
    setDate(){
        this.day = this.today.getDate();
        this.month = this.today.getMonth() + 1;
        if(this.today.getMonth() + 1 < 10){
            this.month = "0" + this.month;
        }
        this.year = this.today.getFullYear();
    }

    getDate(){


        let date = '';
    
        if(this.isDay){
            let day = this.day;
            date += day;
        }

        if(this.isMonth){
            let month = this.month;
            if (date.length != 0) {
                date += "/" + month;
            }else{
                date += month;
            }
        }

        if(this.isYear){
            let year = this.year;
            if (date.length != 0) {
                date += "/" + year;
            }else{
                date += year;
            }
        }

        return date;
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

class Lantecy{

    latence = document.getElementById("latency-bar");
    serv = "https://www.google.com/";
    show = true;

    constructor(){
        this.getLatency();
        setInterval(() => {
            if(this.show){
                this.getLatency().then((latency) => {
                    this.latence.textContent = latency + "ms";
                });
            }
        }, 1000);
    }
    getLatency() {
        const start = new Date().getTime();
        return fetch(this.serv, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8000/'
            }
        }).then(() => {
            const end = new Date().getTime();
            return end - start;
        });
    }
}