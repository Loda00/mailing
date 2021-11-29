var faker = require("faker")
var fn = require(process.cwd() + "/data-dummy/functions")

module.exports = {
    name: "Mitsui",
    ruc: "8484748744",
    companyName: "Toyota Mitsui",
    address: "Av Canada 122 La victoria",
    phone: "54544545",
    email: "mitsui@toyota.com",
    packageName: ["Premium", "Destacado", "Simple"][fn.randomNumberMinMax(0, 2)],
    packageDuration: fn.randomNumberMinMax(1, 30) + " días",
    paymentLink: "http://neoauto.com",
    paymentAmount: 2500,
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
    paymentCode: "345434354",
    paymentExpireDate: "24/04/2017 | 12:25 hrs"
}
