var faker = require("faker")
var fn = require(process.cwd() + "/data-dummy/functions")

module.exports = {
    name: "Mitsui",
    namePackage: ["Premium", "Destacado", "Simple"][fn.randomNumberMinMax(0, 2)],
    endDate: "25/04/2017",
    duration: fn.randomNumberMinMax(1, 30) + " días",
    sheetModel: "Ilimitado",
    printedNews: faker.random.number(),
    onlineShop: ["Incluido", ""][fn.randomNumberMinMax(0, 1)],
    additional: [
        "Texto Promocional",
        "Destaque en ficha 0KM",
        "2 post en facebook",
        "2 notas en el blog",
        "Destaque de concesionario.",
    ],
    activationDate: "20/2/2017",
    expirationDate: "24/04/2017",
    idTransaction: "34556"
}
