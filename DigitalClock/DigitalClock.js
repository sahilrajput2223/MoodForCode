function ShowTime(){
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var AM_PM = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        AM_PM = "PM";
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    var time = h + ":" + m + ":" + s + " " + AM_PM;

    document.getElementById("DigitalClock").innerHTML = time;
    setTimeout(ShowTime, 1000);
}   

ShowTime();