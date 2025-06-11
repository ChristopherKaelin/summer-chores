//  A function that will take in a person's name. 
// When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
function mowYard(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });
}

//  A function that will take in a person's name. 
// If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console.
function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.2; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished using the weed eater.`);
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
    }) ;
}

//	A function that will take in a person's name. 
// If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.
function trimHedges(name ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.15; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished trimming the hedges.`);
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
} 

//	A function that will take in a person's name. 
// If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console.
function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.1; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished collecting wood.`);
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
} 

//	A function that will take in a person's name. 
// If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function. 
// Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.
function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.25; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished watering the garden.`);
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
} 


//	A function that will take in a person's name as an argument. 
// This method will call the mowYard function, essentially wrapping your "callback hell." 
// If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"
function doSummerChores(name = "John") {
    console.log(`${name} is starting their summer chores...`);


    mowYard(name)
        .then(result => {console.log(result); return weedEat(name);})
        .then(result => {console.log(result); return trimHedges(name);})
        .then(result => {console.log(result); return collectWood(name);})
        .then(result => {console.log(result); return waterGarden(name);})
        .then(result => {console.log(result); console.log(`${name} finished all their chores!`);})
        .catch((error) => {console.log(error);})
        ;    
} 

doSummerChores("Christopher");