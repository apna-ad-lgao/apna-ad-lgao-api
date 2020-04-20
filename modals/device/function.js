const existUser = async (DB, id) => {
    const userDetail = await DB.models.User.findOne({
        where: {id: id}
    });
    return userDetail;
};

const activateUser = async (DB, id) => {
    let userDetail = await existUser(DB, id);
    if (userDetail && userDetail.id) {
        userDetail = await DB.models.User.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        userDetail = await existUser(DB, id);
    }
    return userDetail;
};

const createUser = async (DB, email, mobile, name, password) => {
    let userDetail = await DB.models.User.create({
        email: email,
        mobile: mobile,
        name: name,
        password: password,
    });
    return userDetail;
};

const deleteUser = async (DB, id) => {
    let userDetail = await existUser(DB, id);
    if (userDetail && userDetail.id) {
        userDetail = await DB.models.User.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        userDetail = await existUser(DB, id);
    }
    return userDetail;
};

const getUser = async (DB, id) => {
    return existUser(DB,id);
};

const updateUser = async (DB, id, args) => {
    let userDetail = await existUser(DB, id);
    if (userDetail && userDetail.id) {
        userDetail = await DB.models.User.update(args);
    }
    return userDetail;
};

module.exports = {
    activateUser, createUser, deleteUser, existUser, getUser, updateUser
};