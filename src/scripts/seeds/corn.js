<<<<<<< HEAD
export const createCorn = () => {
    return [
        {type :"Corn",
         height: 180, 
         output: 6   
        },

=======
// the special seed, we need to return an array with two identical objects, each with proper keys and values
export const createCorn = () => {
    return [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
>>>>>>> 5068d8377131486261f72cda932a37f03cf8caa3
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
}