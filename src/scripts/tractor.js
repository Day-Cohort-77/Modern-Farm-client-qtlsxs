import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            let seed
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
            if (seed) {
                addPlant(seed)
            }
        }
    }
}