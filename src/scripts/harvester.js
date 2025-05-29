/* Define and export a harvestPlants function
The harvestPlants function must accept the array of plants as input (in main??)
Within the harvestPlants function, initialize an empty array that will be returned.
Looping through each plant & get the value of the `output` property
Add a copy of each plant object BASED ON OUTPUT VALUE
exception from this rule is corn, return only HALF the corn output value. 
RETURN THE HARVEST ARRAY */

export const harvestPlants = (plants) => {
    let harvest = []
    
    for (const plant of plants) {
    if(plant.type === "Corn"){
        for(let c = 0; c < plant.output /2 ; c++){
            harvest.push(plant)
        }
    }
     else{   for (let i = 0; i < plant.output; i++) {
            harvest.push(plant)
        }
    }
    }
    return harvest
}