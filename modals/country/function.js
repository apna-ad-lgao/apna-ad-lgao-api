const existCountry = async (DB, name) => {
    const countryDetail = await DB.models.Country.findOne({
        where: {name: name}
    });
    return countryDetail;
};

const createCountry = async (DB, name, alpha2code, alpha3code, isonumeric, continent) => {
    let countryDetail = await DB.models.Country.create({
        name: name,
        alpha2code: alpha2code,
        alpha3code: alpha3code,
        isonumeric: isonumeric,
        continent: continent,
    });
    return countryDetail;
};

const getCountry = async (DB, name) => {
    return existCountry(DB, name);
};

const getCountries = async (DB) => {
    const countryDetails = await DB.models.Country.findAll();
    return countryDetails;
};

const getAllCountries = async (DB, args) => {
    const countryDetails = await DB.models.Country.findAll({
        where: args
    });
    return countryDetails;
};

const updateCountry = async (DB, name, args) => {
    let countryDetail = await existCountry(DB, name);
    if (countryDetail && countryDetail.name) {
        countryDetail = await DB.models.Country.update(
            args,
            { returning: true, where: { name: name }}    
        );
    }
    return countryDetail;
};

module.exports = {
    createCountry, existCountry, getCountry, getCountries, getAllCountries, updateCountry
};