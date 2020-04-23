const existIndustry = async (DB, id) => {
    const industryDetail = await DB.models.Industry.findOne({
        where: {id: id}
    });
    return industryDetail;
};

const activateIndustry = async (DB, id) => {
    let industryDetail = await existIndustry(DB, id);
    if (industryDetail && industryDetail.id) {
        industryDetail = await DB.models.Industry.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        industryDetail = await existIndustry(DB, id);
    }
    return industryDetail;
};

const createIndustry = async (DB, name) => {
    let industryDetail = await DB.models.Industry.create({
        name: name
    });
    return industryDetail;
};

const deleteIndustry = async (DB, id) => {
    let industryDetail = await existIndustry(DB, id);
    if (industryDetail && industryDetail.id) {
        industryDetail = await DB.models.Industry.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        industryDetail = await existIndustry(DB, id);
    }
    return industryDetail;
};

const getIndustry = async (DB, id) => {
    return existIndustry(DB,id);
};

const getAllIndustry = async (DB, args) => {
    const industryDetail = await DB.models.Industry.findAll({
        where: args
    });
    return industryDetail;
};

const updateIndustry = async (DB, id, args) => {
    let industryDetail = await existIndustry(DB, id);
    if (industryDetail && industryDetail.id) {
        industryDetail = await DB.models.Industry.update(args, { where: { id: id }});
    }
    return industryDetail;
};

module.exports = {
    activateIndustry, createIndustry, deleteIndustry, existIndustry, getIndustry, getAllIndustry, updateIndustry
};