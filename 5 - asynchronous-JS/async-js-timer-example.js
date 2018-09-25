/***********************************/
/* ASYNCHRONOUS JAVASCRIPT EXAMPLE */
/***********************************/

const second = () => {

        // Setting a timer that will be called after both 'Hey there' and 'The end' have been printed
        setTimeout(() => {
            console.log('Async Hey there');
        }, 2000);
    }
    
    const first = () => {
        console.log('Hey there');
        second();
        console.log('The end');
    }
    first();