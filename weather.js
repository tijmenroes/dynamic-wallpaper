  var moduleWeather = (function () {


 var publicMethod = function weather(lat,long) {
        $.ajax({
            dataType: "json",
            url: "https://api.darksky.net/forecast/edce0581bd63dba98ebd828919821206/"+ lat + ","+ long +"?exclude=minutely,hourly,daily,flags&units=si"
            //Get the API json data, exclude unnecessary information. Units are European for testing purposes
        }).done(function (weatherData) {
           var icon = weatherData.currently.icon; //Get the icon supplied by the API
           $("#icon").text(icon);
           console.log(icon);
           if(icon === "cloudy") {
                $("#icon").css("background", "black");
                } else if (icon === "rain") {
                createRain();
                $("#icon").css("background", "red");
            } else if (icon === "clear-day") {
                $("#icon").css("background", "yellow");
            }
        });
    };
    //Section - Rain
    var nbDrop = 600; //Amount of times it loops, so the amount of raindrops
    function randRange(maxNum, minNum) {
        return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum); //Return a random number where the droplet is supposed to be positioned
    }

    function createRain() {
        for (i = 0; i < nbDrop; i++) {

            var dropLeft = randRange(0, 1700);
            var dropTop = randRange(-400, 1920);
            $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
            $('#drop' + i).css('left', dropLeft);
            $('#drop' + i).css('top', dropTop);
        }
    }

    var cordsMethod = function geoFindMe() {
        var output = document.getElementById("out");
        if (!navigator.geolocation){ //When no location could be found
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
        }

       var cords = function tracked(position) { //when a location could be found,
            latitude  = position.coords.latitude;
            longitude = position.coords.longitude;
           
        geoCode(latitude, longitude);
       
       weather(latitude,longitude);
               
        };

        function error() {
            output.innerHTML = "Unable to retrieve your location";
        }

        navigator.geolocation.getCurrentPosition(tracked, error);
       
    }

    var geoCoder = function geoCode(lat,long) {
        $.ajax({
            dataType: "json",
            url: "https://api.opencagedata.com/geocode/v1/json?key=7660484dd340439191dc955d60999f3a&q="+ lat + "%2C"+ long +"&pretty=1&no_annotations=1"
            //Get the API json data, exclude unnecessary information. Units are European for testing purposes
        }).done(function(geoData) {
            var country = geoData.results[0].components.country;
            var city = geoData.results[0].components.city;

            $("#location").text(city + ", " + country); //display city and country
        });
    };
    return {
        publicMethod: publicMethod,
        cordsMethod: cordsMethod,
        geoCoder: geoCoder

    }
    geoFindMe();
  
      })();
    
       
        moduleWeather.geoCoder(5.4545,5.4545); //set geocoder yourself, comment this for your own geolocation
        moduleWeather.publicMethod(0,0); //Set weatherlocation yourself, comment this for your own geolocation