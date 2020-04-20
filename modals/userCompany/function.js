const existUserCompany = async (DB, id) => {
    const UserCompanyDetail = await DB.models.UserCompany.findOne({
        where: {id: id}
    });
    return UserCompanyDetail;
};

const activateUserCompany = async (DB, id) => {
    let UserCompanyDetail = await existUserCompany(DB, id);
    if (UserCompanyDetail && UserCompanyDetail.id) {
        UserCompanyDetail = await DB.models.UserCompany.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        UserCompanyDetail = await existUserCompany(DB, id);
    }
    return UserCompanyDetail;
};

const createUserCompany = async (DB, userId, companyId) => {
    let UserCompanyDetail = await DB.models.UserCompany.create({
        userId: userId,
        companyId: companyId,
    });
    return UserCompanyDetail;
};

const deleteUserCompany = async (DB, id) => {
    let UserCompanyDetail = await existUserCompany(DB, id);
    if (UserCompanyDetail && UserCompanyDetail.id) {
        UserCompanyDetail = await DB.models.UserCompany.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        UserCompanyDetail = await existUserCompany(DB, id);
    }
    return UserCompanyDetail;
};

const getUserCompany = async (DB, id) => {
    return existUserCompany(DB,id);
};

const getAllUserCompany = async (DB, args) => {
    const UserCompanyDetail = await DB.models.UserCompany.findAll({
        where: args
    });
    return UserCompanyDetail;
};

const updateUserCompany = async (DB, id, args) => {
    let UserCompanyDetail = await existUserCompany(DB, id);
    if (UserCompanyDetail && UserCompanyDetail.id) {
        UserCompanyDetail = await DB.models.UserCompany.update(args);
    }
    return UserCompanyDetail;
};

module.exports = {
    activateUserCompany, createUserCompany, deleteUserCompany, existUserCompany, getUserCompany, getAllUserCompany, updateUserCompany
};