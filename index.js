const axios = require("axios");
const fs = require("fs");
const thief = require("colorthief");

async function run() {
    console.log("Fetching country codes...");
    const data = (await axios.get("https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.csv")).data;

    // I know this parsing is hacky, but I was lazy and this works for now

    const rows = data.split("\n");
    rows.shift(); // Remove first row to get rid of CSV labels
    rows.pop(); // Remove last to get rid of new line at EOF

    const codes = [];

    for (const row of rows) {
        let code = row.split(",")[1];
        // Sometimes the country name includes a ','
        if (!code || code.length > 2) code = row.split(",")[2];
        codes.push(code);
    }

    const colors = {};

    for (const code of codes) {
        console.log(`Stealing dominant color for ${code}...`);
        const url = `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
        const rgb = await thief.getColor(url);
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        colors[code] = hex;
        await new Promise(resolve => { setTimeout(resolve, 500) });
    }

    fs.writeFileSync("flag-colors.json", JSON.stringify(colors), "utf-8");
}


// https://stackoverflow.com/a/5624139
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

run();