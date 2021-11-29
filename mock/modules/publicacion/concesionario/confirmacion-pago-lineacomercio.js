var faker = require("faker")
var fn = require(process.cwd() + "/data-dummy/functions")

module.exports = {
    name: "Mitsui",
    packageName: ["Premium", "Destacado", "Simple"][fn.randomNumberMinMax(0, 2)],
    packageDuration: fn.randomNumberMinMax(1, 30) + " días",
    sheetModel: "Ilimitado",
    printedAds: faker.random.number(),
    onlineShop: ["Incluido", "No incluido"][fn.randomNumberMinMax(0, 1)],
    additional: [
        "Texto Promocional",
        "Destaque en ficha 0KM",
        "2 post en facebook",
        "2 notas en el blog",
        "Destaque de concesionario",
    ],

    paymentMethod: "Crédito El Comercio",
    paymentAmount: 2500,
    paymentFee: 125,
    paymentTotal: 2650,
    paymentDate: "24/04/2017 | 12:25 hrs",
}
