
// Represents a value that may be available now, later, or never.

console.log('Beginning');

// 1. Definition: new Promise<TypeOfResolveValue>((resolve, reject) => { ... })
const myPromise = new Promise<number>((resolve, reject) => {

    setTimeout(() => {
        
        // Scenario A: Success (The friend pays back)
        // resolve(100);

        // Scenario B: Failure (The friend runs away)
        reject('My friend ran away with the money');

    }, 2000);

});


// 2. Execution & Handling
myPromise
    // .then() runs if resolve() was called
    .then( ( amount ) => {
        console.log(`Success! I got my $${amount} back.`);
    })
    // .catch() runs if reject() was called (or if an error was thrown)
    .catch( ( error ) => {
        console.warn('Error:', error);
    })
    // .finally() runs always, regardless of the outcome
    .finally( () => {
        console.log('Finally: Life goes on...');
    });


console.log('End');