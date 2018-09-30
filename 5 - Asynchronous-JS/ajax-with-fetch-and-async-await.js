/*****************************************/
/* AJAX CALLS WITH FETCH AND ASYNC/AWAIT */
/*****************************************/

// Create an async function based on the 'AJAX calls with fetch and ES6 promises' lecture
async function getWeatherAW(woeid) {

    // Using 'try' and 'catch' to look for errors in the 'Async/Await' logic
    try {
    
        // Using the 'fetch' method to get the data and saving the result
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        
        // Converting the result to JSON
        const data = await result.json();

        // Printing the data to the console
        const tomorrow = data.consolidated_weather[2];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow .max_temp}.`);

        // Returning the 'promise'
        return data; 

    } catch(error) {
        // Using 'alert' to create a prompt window with the error
        alert(error);
    }
}
getWeatherAW(2487956);

// Returning the data from London (the promise)
let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});