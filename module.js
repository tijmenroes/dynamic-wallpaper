var module = (function () {

startTime();
function startTime() {
        var today = new Date();
        //Get variables for displaying clock
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        m = addZero(m); //When < 0, display a zero in front
        s = addZero(s);
        //Display the clock
        $('#clock').text(h + ":" + m + ":" + s);

        //Date
        var date = today.getDate();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthNr = today.getMonth();
        var month = months[monthNr];
        var monthLatest = monthNr + 1; // +1 because it sees as -1 month (January = 0)
        var year = today.getFullYear();

        var toHour = 0.00000027778; //milliseconds to hour
        var timeNow = today.getTime() * toHour;
        var startDay = new Date("'" + year + "-" + monthLatest  + "-" + date + "'").getTime() * toHour;
        var timeDiff = timeNow - startDay; //Timediff is the amount of milliseconds currently in the day
        Sun(timeDiff); //Start the Sun function

        $("#date").text(date + " " + month + ", " + year);

        setTimeout(startTime, 500);

    }

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }  // add zero in front of numbers < 10
        return i;
    }
    
    
    function Sun(x) {
        var rekensom = Math.sin(5-x/3.5);
        // console.log(rekensom);
        var zonVector = $(".moving");
        zonVector.css("bottom", rekensom*700);
        if (x < 12) {
           zonVector.css("left", rekensom*750);
        } else if (x > 12) {
            zonVector.css("right", rekensom*750);
        }
        //Background color goes from dark blue, to lightblue, to dark blue
        $("body").css("background-color", "rgb(37,"+ rekensom*10.62 + ", 209)");
    }
    
    

    })();