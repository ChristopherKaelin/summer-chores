//  A function that will take in a person's name and a callback function. 
// When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}

//  A function that will take in a person's name and a callback function. 
// If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console.
function weedEat(name, callback) {
    setTimeout(() => {
        const completed = Math.random() > 0.25; // Simulate success or failure
        if (completed) {
            console.log(`${name} finished using the weed eater.`);
            callback();
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
        }
    }, 1500);
}

//	A function that will take in a person's name and a callback function. 
// If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.
function trimHedges(name, callback ) {
    setTimeout(() => {
        const completed = Math.random() > 0.33; // Simulate success or failure
        if (completed) {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 1000);
} 

//	A function that will take in a person's name and a callback function. 
// If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console.
function collectWood(name, callback) {
    setTimeout(() => {
        const completed = Math.random() > 0.33; // Simulate success or failure
        if (completed) {
            console.log(`${name} finished collecting wood.`);
            callback();
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, 2500);
} 

//	A function that will take in a person's name and a callback function. 
// If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.
function waterGarden(name, callback) {
    setTimeout(() => {
        const completed = Math.random() > 0.66; // Simulate success or failure
        if (completed) {
            console.log(`${name} finished watering the garden.`);
            callback();
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 500);
} 


//	A function that will take in a person's name as an argument. 
// This method will call the mowYard function, essentially wrapping your "callback hell." 
// If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"
function doSummerChores(name = "John") {
    console.log(`${name} is starting their summer chores...`);

    // Start the chain of callbacks
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    });
} 

doSummerChores('Chris');
