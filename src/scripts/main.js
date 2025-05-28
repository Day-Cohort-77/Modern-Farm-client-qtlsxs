import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)

const plantsInField = usePlants()
console.log(plantsInField)