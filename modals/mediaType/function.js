const existTags = async (DB, id) => {
    const tagsDetail = await DB.models.Tags.findOne({
        where: {id: id}
    });
    return tagsDetail;
};

const activateTags = async (DB, id) => {
    let tagsDetail = await existTags(DB, id);
    if (tagsDetail && tagsDetail.id) {
        tagsDetail = await DB.models.Tags.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        tagsDetail = await existTags(DB, id);
    }
    return tagsDetail;
};

const createTags = async (DB, name) => {
    let tagsDetail = await DB.models.Tags.create({
        name: name,
    });
    return tagsDetail;
};

const deleteTags = async (DB, ids) => {
    let tagsDetails = [];
    ids.forEach(async(id) => {
        let tagsDetail = await existTags(DB, id);
        if (tagsDetail && tagsDetail.id) {
            tagsDetail = await DB.models.Tags.update(
                { isHidden: 1, }, 
                { returning: true, where: { id: id }}
            );
            tagsDetail = await existTags(DB, id);
            tagsDetails.push(tagsDetail);
        } 
    });
    return tagsDetails;
};

const getTags = async (DB, id) => {
    return existTags(DB,id);
};

const getAllTags = async (DB, args) => {
    const tagsDetail = await DB.models.Tags.findAll({
        where: args
    });
    return tagsDetail;
};

const updateTags = async (DB, id, args) => {
    let tagsDetail = await existTags(DB, id);
    if (tagsDetail && tagsDetail.id) {
        tagsDetail = await DB.models.Tags.update(args, { where: { id: id }});
    }
    return tagsDetail;
};

module.exports = {
    activateTags, createTags, deleteTags, existTags, getTags, getAllTags, updateTags
};