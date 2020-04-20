const existCategory = async (DB, id) => {
    const categoryDetail = await DB.models.Category.findOne({
        where: {id: id}
    });
    return categoryDetail;
};

const activateCategory = async (DB, id) => {
    let categoryDetail = await existCategory(DB, id);
    if (categoryDetail && categoryDetail.id) {
        categoryDetail = await DB.models.Category.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        categoryDetail = await existCategory(DB, id);
    }
    return categoryDetail;
};

const createCategory = async (DB, name, description, image, isParentCategory, addressId) => {
    let categoryDetail = await DB.models.Category.create({
        name: name,
        description: description,
        image: image,
        isParentCategory: isParentCategory,
        addressId: addressId,
    });
    return categoryDetail;
};

const deleteCategory = async (DB, id) => {
    let categoryDetail = await existCategory(DB, id);
    if (categoryDetail && categoryDetail.id) {
        categoryDetail = await DB.models.Category.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        categoryDetail = await existCategory(DB, id);
    }
    return categoryDetail;
};

const getCategory = async (DB, id) => {
    return existCategory(DB,id);
};

const getAllCategory = async (DB, id) => {
    const categoryDetails = await DB.models.Category.findAll({
        where: args
    });
    return categoryDetails;
};

const updateCategory = async (DB, id, args) => {
    let categoryDetail = await existCategory(DB, id);
    if (categoryDetail && categoryDetail.id) {
        categoryDetail = await DB.models.Category.update(args, { where: { id: id }});
    }
    return categoryDetail;
};

module.exports = {
    activateCategory, createCategory, deleteCategory, existCategory, getCategory, getAllCategory, updateCategory
};