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

    paymentMethod: "PagoEfectivo",
    paymentCode: "fdge56",
    paymentAmount: 2500,
    paymentDate: "24/04/2017 | 12:25 hrs",
}
