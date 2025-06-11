//  A function that will take in a person's name. 
// When the chore is complete, return "PERSON'S NAME mowed the yard." as the result.
function mowYard(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });
}

//  A function that will take in a person's name. 
// If the chore is completed, return "PERSON'S NAME finished using the weed eater." as the result 
// Otherwise, return "PERSON'S NAME fell asleep after mowing the yard." as the result
function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.4; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished using the weed eater.`);
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
    }) ;
}

//	A function that will take in a person's name. 
// If the chore is completed, return "PERSON'S NAME finished trimming the hedges." as the result 
// Otherwise, return "PERSON'S NAME fell asleep after weed eating the yard." as the result
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
// If the chore is completed, return "PERSON'S NAME finished collecting wood." as the result 
// Otherwise, return "PERSON'S NAME fell asleep after trimming the hedges." as the result
function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.15; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished collecting wood.`);
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
} 

//	A function that will take in a person's name. 
// If the chore is completed, return "PERSON'S NAME finished watering the garden." as the result 
// Otherwise, return "PERSON'S NAME fell asleep after collecting wood." as the result
function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const completed = Math.random() > 0.33; // Simulate success or failure
            if (completed) {
                resolve(`${name} finished watering the garden.`);
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
} 


//	A function that will take in a person's name as an argument. 
// If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"
async function doSummerChores(name = "John") {
    console.log(`${name} is starting their summer chores...`);

    try {
        // mowYard
        const didMowYard = await mowYard(name);
        console.log(didMowYard); 

        // weedEat
        const didWeedEat = await weedEat(name);
        console.log(didWeedEat);

        // trimHedges
        const didTrimHedges = await trimHedges(name);
        console.log(didTrimHedges);

        // collectWood
        const didCollectWood = await collectWood(name);
        console.log(didCollectWood);

        // waterGarden
        const didWaterGarden = await waterGarden(name);
        console.log(didWaterGarden);
    }
    catch (error) {
        console.log(error);
    }
} 

doSummerChores("Christopher");