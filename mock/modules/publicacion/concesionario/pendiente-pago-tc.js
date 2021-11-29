var faker = require("faker")
var fn = require(process.cwd() + "/data-dummy/functions")

module.exports = {
    name: "Mitsui",
    packageName: ["Premium", "Destacado", "Simple"][fn.randomNumberMinMax(0, 2)],
    packageDuration: fn.randomNumberMinMax(1, 30) + " días",
    paymentLink: "http://neoauto.com",
    paymentAmount: 2500
}
