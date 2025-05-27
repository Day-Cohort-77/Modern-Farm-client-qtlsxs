// the special seed, we need to return an array with two identical objects, each with proper keys and values
export const createCorn = () => {
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