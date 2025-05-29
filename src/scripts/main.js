import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog, catalogTwo } from "./catalog.js"
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)

const plantsInField = usePlants()


const harvestedPlant = harvestPlants(plantsInField)
harvestedPlant.sort((a, b) => a.type.localeCompare(b.type))
document.querySelector(".container").innerHTML = catalog(harvestedPlant)
//document.querySelector(".container").innerHTML = catalogTwo(harvestedPlant)
