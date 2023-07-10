
function get_weather(city) {
    // console.log(city);

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6d1d27e0c0msh7ad012989010addp11f064jsn6dfe7d581caa",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

// Creating a GET request for weather
 let p = fetch(url, options);
 p.then((value1) =>{
          return value1.json();
      }).then((value2) =>{
        console.log(value2.current);

        // Fetching values
        let condition = value2.current.condition.text;
        let humidity = value2.current.humidity;
        let wind_speed = value2.current.wind_kph;
        let wind_direction = value2.current.wind_dir;
        let wind_deg = value2.current.wind_degree;
        let air = value2.current.pressure_in;
        let temp = value2.current.temp_c;

        let wimg = document.getElementById("wcard-img");
        let aimg = document.getElementById("acard-img");

        // Putting values
        
        document.getElementById("w-heading").innerHTML = "Weather for " + city;
        document.getElementById("temp").innerHTML = "Temperature: " + temp + " C"
        document.getElementById("condition").innerHTML = "Condition: " + condition 
        document.getElementById("humidity").innerHTML = "Humidity: " + humidity
        document.getElementById("wind_speed").innerHTML = "Wind Speed: " + wind_speed + " Kph"
        document.getElementById("wind_dir").innerHTML = "Wind Direction: " + wind_direction
        document.getElementById("wind_deg").innerHTML = "Wind Degree: " + wind_deg
        document.getElementById("air_press").innerHTML = "Wind Pressure: " + air;

        // Putting the weather img
        if(condition == "Sunny"){
            wimg.setAttribute("src","sun.png");
        }
        else if(condition == "Mist"){
            wimg.setAttribute("src","fog.png");
        }
        else if(condition == "Clear"){
            wimg.setAttribute("src","sun.png");
        }
        else if(condition == "Cloudy"){
            wimg.setAttribute("src","cloudy.png");
        }
        else if(condition == "Rainy"){
            wimg.setAttribute("src","rainy.png");
        }
        else if(condition == "Partly cloudy"){
            wimg.setAttribute("src","cloudy.png");
        }
        else if(condition == "Heavy rain at times"){
            wimg.setAttribute("src","rainy.png");
        }

        aimg.setAttribute("src","windy.png")

      })
  }
  
  // Adding the event Listener

  let search_btn = document.getElementById("search_btn");
  search_btn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page refresh
    
    let city = document.getElementById("city").value;
    document.getElementById("city").value = ""
    get_weather(city);
  });
  

