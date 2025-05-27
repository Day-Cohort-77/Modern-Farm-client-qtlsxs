let theField = []

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
