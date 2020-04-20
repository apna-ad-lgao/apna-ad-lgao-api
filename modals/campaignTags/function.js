const existCampaignTags = async (DB, id) => {
    const campaignTagsDetail = await DB.models.CampaignTags.findOne({
        where: {id: id}
    });
    return campaignTagsDetail;
};

const activateCampaignTags = async (DB, id) => {
    let campaignTagsDetail = await existCampaignTags(DB, id);
    if (campaignTagsDetail && campaignTagsDetail.id) {
        campaignTagsDetail = await DB.models.CampaignTags.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        campaignTagsDetail = await existCampaignTags(DB, id);
    }
    return campaignTagsDetail;
};

const createCampaignTags = async (DB, name, description, image, isParentCampaignTags, addressId) => {
    let campaignTagsDetail = await DB.models.CampaignTags.create({
        name: name,
        description: description,
        image: image,
        isParentCampaignTags: isParentCampaignTags,
        addressId: addressId,
    });
    return campaignTagsDetail;
};

const deleteCampaignTags = async (DB, id) => {
    let campaignTagsDetail = await existCampaignTags(DB, id);
    if (campaignTagsDetail && campaignTagsDetail.id) {
        campaignTagsDetail = await DB.models.CampaignTags.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        campaignTagsDetail = await existCampaignTags(DB, id);
    }
    return campaignTagsDetail;
};

const getCampaignTags = async (DB, id) => {
    return existCampaignTags(DB,id);
};

const getAllCampaignTags = async (DB, id) => {
    const campaignTagsDetails = await DB.models.CampaignTags.findAll({
        where: args
    });
    return campaignTagsDetails;
};

const updateCampaignTags = async (DB, id, args) => {
    let campaignTagsDetail = await existCampaignTags(DB, id);
    if (campaignTagsDetail && campaignTagsDetail.id) {
        campaignTagsDetail = await DB.models.CampaignTags.update(args, { where: { id: id }});
    }
    return campaignTagsDetail;
};

module.exports = {
    activateCampaignTags, createCampaignTags, deleteCampaignTags, existCampaignTags, getCampaignTags, getAllCampaignTags, updateCampaignTags
};