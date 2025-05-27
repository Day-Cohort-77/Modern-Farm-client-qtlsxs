//define a variable whose initial value is an empty array
// this array will store all of the plants that are growing in the field
// DO NOT EXPORT THE ARRAY 
let theField = []

//define and export a function named addPlant
//addPlant must accept a seed object as input (argument) (we need to set a parameter for the function)
//the function should add the seed to theField array
//WE NEED TO ITERATE OUR CORN LETS PUT A PIN IN THE CORN PROBLEM FOR NOW
//
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const plant of seed) {
            theField.push(plant)
        }
    } else {
        theField.push(seed)
    }
}

export const usePlants = () => {
    return structuredClone(theField)
}