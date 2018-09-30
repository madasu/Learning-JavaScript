/*****************************************************************************/
/* ASYNCHRONOUS JAVASCRIPT - ASYNC/AWAIT (AN EASIER WAY TO CONSUME PROMISES) */
/*****************************************************************************/

// Using the same example from the promises introductory lecture

// Creating the first promise (to get the IDs of each recipe)
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        /* Calling the 'resolve' function that marks the promise was 
        'fulfilled' */        
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

// Using Async/Await to consume the promises above
async function getRecipesAW() {

    // Consume the promises using the Async/Await logic
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Paulo Cunha');
    console.log(related);

    // Trying to return one of the variables created 
    return recipe;

}
// const rec = getRecipesAW();
/* console.log(rec); - When we try to print the result of the 'getRecipe' function, this one is still 
running in the background */

// Use the 'then' method to return a variable from the 'Async' function
getRecipesAW().then(result => console.log(`${result} is the best recipe ever!`));