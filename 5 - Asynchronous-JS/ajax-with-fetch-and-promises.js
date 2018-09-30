/**************************************/
/* AJAX CALLS WITH FETCH AND PROMISES */
/**************************************/

// Function that returns the weather based on the place on earth (using the MetaWeather API)
function getWeather(woeid) {

    // Passing the url that will call the MetaWeather API as an example
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)

    // Using the 'then' and 'catch' methods on the returned promise 
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data => {

        // console.log(data); // Example of logging the entire object to the console

        // Logging the weather of today to the console
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);

    })
    .catch(error => console.log(error));

}
getWeather(2487956);
getWeather(44418);