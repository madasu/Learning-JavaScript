/**************************************/
/* ASYNCHRONOUS JAVASCRIPT - PROMISES */
/**************************************/

/* Example of using a promise (recreating the example of 'Asynchronous 
JavaScript with callbacks') */

// Creating the first promise (to get the IDs of each recipe)
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Calling the 'resolve' function that marks the promise was 'fulfilled'
        resolve([431, 157, 534, 148]);
    }, 1500);
});

// Creating a function that receives a given 'ID' and then returns a 'promise'
const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Paulo'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

// Function that fetches the recipe associated with the author of the first one
const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Salad', publisher: 'Paulo'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// Use the 'then' and 'catch' methods (all the promise objects inherit them)
getIDs.

// Using 'then' for the case that the promise is 'fullfilled' 
then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
   console.log(recipe);
   return getRelated('Paulo Cunha'); 
})
.then(recipe => {
    console.log(recipe);
})
 
// Using 'catch' for the case that the promise is 'rejected'
.catch(error => {
    console.log(error);
});