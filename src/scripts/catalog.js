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