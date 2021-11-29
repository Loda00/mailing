var faker = require("faker")
var fn = require(process.cwd() + "/data-dummy/functions")

module.exports = {
    namePackage: ["Premium", "Destacado", "Simple"][fn.randomNumberMinMax(0, 2)],
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
    publishedDays: fn.randomNumberMinMax(1, 30) + " días",
    viewNumber: 120,
    contactNumber: 182
}
