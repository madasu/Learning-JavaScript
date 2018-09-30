/********************************************************/
/* ASYNCHRONOUS JAVASCRIPT WITH CALLBACKS (THE OLD WAY) */
/********************************************************/

// Fake 'recipe reader' to simulate AJAX calls using some timers 
function getRecipe() {
    setTimeout(() => {
        const recipeID = [431, 157, 534, 148];
        console.log(recipeID);

        setTimeout(id => {
            const recipe1 = {title: 'Fresh tomato pasta', publisher: 'Paulo'};
            console.log(`${id}: ${recipe1.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Salad', publisher: 'Paulo'};
                console.log(recipe2);
            }, 1500, recipe1.publisher);

        }, 1500, recipeID[2]);

    }, 1500);
}   
getRecipe();