# Wallpaper Overview
An interactive wallpaper which shows the time and weather based on your location. The wallpaper includes a sun that moves along with the time, it comes at 7 in the morning and sets 
at 6 in the evening. Furthermore, the wallpaper will respond to certain events a few examples:
1. When it's raining, rain will appear in the background
2. When it's sunny a sun will appear in the background
3. When it's christmas, a christmas theme will be applied to the background.

## Motivation
I made this project because I often found myself looking at the wallpaper of my laptop or chromecast, and not actually using the device. I decided to make a background for myself, with 
the things I would like to see. Instead of looking at a boring wallpaper with not much happening I decided to add some things and make it interactive, that way I wouldn't get bored of it quickly

## Installation
To use this you will need your own API keys for [google geocode api](https://developers.google.com/maps/documentation/geocoding/intro) and [Dark sky API](https://darksky.net/dev) these keys
will need to be changed in the file weather.js. For the Dark sky API
```
url: "https://api.darksky.net/forecast/YOUR_API_KEY_GOES_HERE/"+ lat + ","+ long +"?exclude=minutely,hourly,daily,flags&units=si"

```
And for the geocode API
```
  url: "https://api.opencagedata.com/geocode/v1/json?key=YOUR_API_KEY_GOES_HEREa&q="+ lat + "%2C"+ long +"&pretty=1&no_annotations=1"
```
This application uses jquery
```
npm  install
```
## Code example 
>in time.js

```
timeModule.sunMethod(12);
```
This will set the timer from the sun at 12 hours, which is the highest point. Use this to play around with the sun and background. If you are playing around with the timer it's best 
to use this, if you don't use this you could only see your result from 7am-18pm since the sun will have gone down.
>in weather.js
```
moduleWeather.geoCoder(lattitude,longitude); //Example 5.555555, 5.555555
```
Here you can set the coordinates to the geocoding API, for example if you'd like to set it to a different country
>in weather.js
```
moduleWeather.weather(5.4545,5.4545)
```
Here you can set the coordinates of the weather API, for example set it to a place where it's raining and see if the rain event works
## Contribute
Feel free to expand on the wallpaper as much as you'd like! A few examples you could add are:
1. Snowflakes when it's winter, falling leaves when it's autumn etc.
2. Different wallpapers based on location, if you are in new york you could have a NY skyline. When in Washington D.C. have a Washington skyline.
3. Display e-mail or other important news relevant to you.
