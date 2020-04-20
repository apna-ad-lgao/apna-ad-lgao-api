const existCampaign = async (DB, id) => {
    const campaignDetail = await DB.models.Campaign.findOne({
        where: {id: id}
    });
    return campaignDetail;
};

const activateCampaign = async (DB, id) => {
    let campaignDetail = await existCampaign(DB, id);
    if (campaignDetail && campaignDetail.id) {
        campaignDetail = await DB.models.Campaign.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        campaignDetail = await existCampaign(DB, id);
    }
    return campaignDetail;
};

const createCampaign = async (DB, name, description, image, isParentCampaign, addressId) => {
    let campaignDetail = await DB.models.Campaign.create({
        name: name,
        description: description,
        image: image,
        isParentCampaign: isParentCampaign,
        addressId: addressId,
    });
    return campaignDetail;
};

const deleteCampaign = async (DB, id) => {
    let campaignDetail = await existCampaign(DB, id);
    if (campaignDetail && campaignDetail.id) {
        campaignDetail = await DB.models.Campaign.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        campaignDetail = await existCampaign(DB, id);
    }
    return campaignDetail;
};

const getCampaign = async (DB, id) => {
    return existCampaign(DB,id);
};

const getAllCampaign = async (DB, id) => {
    const campaignDetails = await DB.models.Campaign.findAll({
        where: args
    });
    return campaignDetails;
};

const updateCampaign = async (DB, id, args) => {
    let campaignDetail = await existCampaign(DB, id);
    if (campaignDetail && campaignDetail.id) {
        campaignDetail = await DB.models.Campaign.update(args, { where: { id: id }});
    }
    return campaignDetail;
};

module.exports = {
    activateCampaign, createCampaign, deleteCampaign, existCampaign, getCampaign, getAllCampaign, updateCampaign
};