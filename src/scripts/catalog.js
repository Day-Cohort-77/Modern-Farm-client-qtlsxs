// Define and export a `Catalog` function.
//1. The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
//As you iterate the array, the `<main>` element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.



export const catalog = (harvest) => {
    let harvestHtml = ""
    for (const food of harvest) {
        harvestHtml += `<section class="plant">${food.type}</section>`



    }
    return harvestHtml
}

export const catalogTwo = (harvest) => {
    // Count each plant type
    const counts = {};
    for (const plant of harvest) {
        if (counts[plant.type]) {
            counts[plant.type]++;
        } else {
            counts[plant.type] = 1;
        }
    }
    // Build the table HTML
    let html = "<table><tr><th>Food</th><th>Quantity</th></tr>";
    for (const type in counts) {
        html += `<tr class = "table">
                    <td class= "type">${type}</td>
                    <td class= "counts">${counts[type]}</td>
                </tr>`;
    }
    html += "</table>";
    return html;
}