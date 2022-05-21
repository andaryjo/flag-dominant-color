# flag-dominant-color

This repository contains a list of dominant colors for all country flags. The dominant colors are derived with [color-thief](https://github.com/lokesh/color-thief) from the flags provided by [flagcdn.com](https://flagcdn.com/). The list of all countries comes from [lukes/ISO-3166-Countries-with-Regional-Codes](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/).

## Usage

The file `flag-colors.json` contains a JSON object with all [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) codes and the corresponding dominant color of the flag in hexadecimal format.

To reproduce the file, simply run `npm start`.

## But why?

I needed a list of colors to represent countries in various diagrams and thought this was a good approach. But in reality, most flags only consist of two or three colors, all with a roughly equal share of the flag. The resulting dominant colors are not colors you would intuitively associate with the country.

You can see the colors in use over at [lgstats.xyz - The Local Guides Leaderboard](https://lgstats.xyz/stats).