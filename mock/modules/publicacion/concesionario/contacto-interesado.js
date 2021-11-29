var faker = require("faker")

module.exports = {
    name: "Mitsui Toyota",
    vehicleName: "Toyota Corolla 2017",
    vehiclePrice: "US$114,000",
    vehicleCode: "435340",
    vehicleImg: "http://cde.3.neoauto.com/blog/302x192/59adf36022b36.jpg",
    interestedContact: faker.name.findName(),
    interestedPhone: faker.phone.phoneNumber(),
    interestedEmail: faker.internet.email(),
    interestedMessage: faker.lorem.paragraph()
}
