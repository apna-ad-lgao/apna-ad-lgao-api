const existUserDevice = async (DB, id) => {
    const UserDeviceDetail = await DB.models.UserDevice.findOne({
        where: {id: id}
    });
    return UserDeviceDetail;
};

const activateUserDevice = async (DB, id) => {
    let UserDeviceDetail = await existUserDevice(DB, id);
    if (UserDeviceDetail && UserDeviceDetail.id) {
        UserDeviceDetail = await DB.models.UserDevice.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        UserDeviceDetail = await existUserDevice(DB, id);
    }
    return UserDeviceDetail;
};

const createUserDevice = async (DB, userId, deviceId) => {
    let UserDeviceDetail = await DB.models.UserDevice.create({
        userId: userId,
        deviceId: deviceId,
    });
    return UserDeviceDetail;
};

const deleteUserDevice = async (DB, id) => {
    let UserDeviceDetail = await existUserDevice(DB, id);
    if (UserDeviceDetail && UserDeviceDetail.id) {
        UserDeviceDetail = await DB.models.UserDevice.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        UserDeviceDetail = await existUserDevice(DB, id);
    }
    return UserDeviceDetail;
};

const getUserDevice = async (DB, id) => {
    return existUserDevice(DB,id);
};

const getAllUserDevice = async (DB, args) => {
    const UserDeviceDetail = await DB.models.UserDevice.findAll({
        where: args
    });
    return UserDeviceDetail;
};

const updateUserDevice = async (DB, id, args) => {
    let UserDeviceDetail = await existUserDevice(DB, id);
    if (UserDeviceDetail && UserDeviceDetail.id) {
        UserDeviceDetail = await DB.models.UserDevice.update(args);
    }
    return UserDeviceDetail;
};

module.exports = {
    activateUserDevice, createUserDevice, deleteUserDevice, existUserDevice, getUserDevice, getAllUserDevice, updateUserDevice
};