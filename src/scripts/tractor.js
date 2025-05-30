// Import seed factory functions for each plant type
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
// Import function to add a seed to the field
import { addPlant } from "./field.js"

// Function to plant seeds in the field based on the yearly plan
export const plantSeeds = (plan) => {
    // Loop through each row in the plan
    for (const row of plan) {
        // Loop through each plant type in the row
        for (const plant of row) {
            let seed
            // Determine which seed to create based on plant type
            if (plant === "Asparagus") {
                seed = createAsparagus()
            } else if (plant === "Corn") {
                seed = createCorn()
            } else if (plant === "Potato") {
                seed = createPotato()
            } else if (plant === "Soybean") {
                seed = createSoybean()
            } else if (plant === "Sunflower") {
                seed = createSunflower()
            } else if (plant === "Wheat") {
                seed = createWheat()
            }
            // Add the created seed to the field
            if (seed) {
                addPlant(seed)
            }
        }
    }
}