import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js" // <-- Import field functions

const yearlyPlan = createPlan()

const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

// Test adding seeds to the field
addPlant(asparagusSeed)
addPlant(cornSeed)
addPlant(potatoSeed)

// Get a copy of the plants in the field and log them
const plantsInField = usePlants()
console.log(plantsInField)