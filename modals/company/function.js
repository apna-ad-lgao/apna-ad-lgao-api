const existCompany = async (DB, id) => {
    const companyDetail = await DB.models.Company.findOne({
        where: {id: id}
    });
    return companyDetail;
};

const activateCompany = async (DB, id) => {
    let companyDetail = await existCompany(DB, id);
    if (companyDetail && companyDetail.id) {
        companyDetail = await DB.models.Company.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        companyDetail = await existCompany(DB, id);
    }
    return companyDetail;
};

const createCompany = async (DB, name, description, image, isParentCompany) => {
    let companyDetail = await DB.models.Company.create({
        name: name,
        description: description,
        image: image,
        isParentCompany: isParentCompany,
    });
    return companyDetail;
};

const deleteCompany = async (DB, id) => {
    let companyDetail = await existCompany(DB, id);
    if (companyDetail && companyDetail.id) {
        companyDetail = await DB.models.Company.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        companyDetail = await existCompany(DB, id);
    }
    return companyDetail;
};

const getCompany = async (DB, id) => {
    return existCompany(DB,id);
};

const updateCompany = async (DB, id, args) => {
    let companyDetail = await existCompany(DB, id);
    if (companyDetail && companyDetail.id) {
        companyDetail = await DB.models.Company.update(args);
    }
    return companyDetail;
};

module.exports = {
    activateCompany, createCompany, deleteCompany, existCompany, getCompany, updateCompany
};