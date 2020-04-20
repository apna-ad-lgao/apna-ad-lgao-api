const existBanner = async (DB, id) => {
    const bannerDetail = await DB.models.Banner.findOne({
        where: {id: id}
    });
    return bannerDetail;
};

const activateBanner = async (DB, id) => {
    let bannerDetail = await existBanner(DB, id);
    if (bannerDetail && bannerDetail.id) {
        bannerDetail = await DB.models.Banner.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        bannerDetail = await existBanner(DB, id);
    }
    return bannerDetail;
};

const createBanner = async (DB, name, description, image, isParentBanner, addressId) => {
    let bannerDetail = await DB.models.Banner.create({
        name: name,
        description: description,
        image: image,
        isParentBanner: isParentBanner,
        addressId: addressId,
    });
    return bannerDetail;
};

const deleteBanner = async (DB, id) => {
    let bannerDetail = await existBanner(DB, id);
    if (bannerDetail && bannerDetail.id) {
        bannerDetail = await DB.models.Banner.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        bannerDetail = await existBanner(DB, id);
    }
    return bannerDetail;
};

const getBanner = async (DB, id) => {
    return existBanner(DB,id);
};

const getAllBanner = async (DB, id) => {
    const bannerDetails = await DB.models.Banner.findAll({
        where: args
    });
    return bannerDetails;
};

const updateBanner = async (DB, id, args) => {
    let bannerDetail = await existBanner(DB, id);
    if (bannerDetail && bannerDetail.id) {
        bannerDetail = await DB.models.Banner.update(args, { where: { id: id }});
    }
    return bannerDetail;
};

module.exports = {
    activateBanner, createBanner, deleteBanner, existBanner, getBanner, getAllBanner, updateBanner
};