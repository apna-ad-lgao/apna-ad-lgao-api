const existMediaType = async (DB, id) => {
    const mediaTypeDetail = await DB.models.MediaType.findOne({
        where: {id: id}
    });
    return mediaTypeDetail;
};

const activateMediaType = async (DB, id) => {
    let mediaTypeDetail = await existMediaType(DB, id);
    if (mediaTypeDetail && mediaTypeDetail.id) {
        mediaTypeDetail = await DB.models.MediaType.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        mediaTypeDetail = await existMediaType(DB, id);
    }
    return mediaTypeDetail;
};

const createMediaType = async (DB, name) => {
    let mediaTypeDetail = await DB.models.MediaType.create({
        name: name,
    });
    return mediaTypeDetail;
};

const deleteMediaType = async (DB, ids) => {
    let mediaTypeDetails = [];
    ids.forEach(async(id) => {
        let mediaTypeDetail = await existMediaType(DB, id);
        if (mediaTypeDetail && mediaTypeDetail.id) {
            mediaTypeDetail = await DB.models.MediaType.update(
                { isHidden: 1, }, 
                { returning: true, where: { id: id }}
            );
            mediaTypeDetail = await existMediaType(DB, id);
            mediaTypeDetails.push(mediaTypeDetail);
        } 
    });
    return mediaTypeDetails;
};

const getMediaType = async (DB, id) => {
    return existMediaType(DB,id);
};

const getAllMediaType = async (DB, args) => {
    const mediaTypeDetail = await DB.models.MediaType.findAll({
        where: args
    });
    return mediaTypeDetail;
};

const updateMediaType = async (DB, id, args) => {
    let mediaTypeDetail = await existMediaType(DB, id);
    if (mediaTypeDetail && mediaTypeDetail.id) {
        mediaTypeDetail = await DB.models.MediaType.update(args, { where: { id: id }});
    }
    return mediaTypeDetail;
};

module.exports = {
    activateMediaType, createMediaType, deleteMediaType, existMediaType, getMediaType, getAllMediaType, updateMediaType
};