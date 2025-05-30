// Function to create corn seeds (special: returns an array of two identical objects)
export const createCorn = () => {
    // Returns an array with two corn seed objects
    return [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
}