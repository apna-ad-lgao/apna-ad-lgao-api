const existDevice = async (DB, id) => {
    const deviceDetail = await DB.models.Device.findOne({
        where: {id: id}
    });
    return deviceDetail;
};

const activateDevice = async (DB, id) => {
    let deviceDetail = await existDevice(DB, id);
    if (deviceDetail && deviceDetail.id) {
        deviceDetail = await DB.models.Device.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        deviceDetail = await existDevice(DB, id);
    }
    return deviceDetail;
};

const createDevice = async (DB, uuid, model, platform, fingerprint) => {
    let deviceDetail = await DB.models.Device.create({
        uuid: uuid,
        model: model,
        platform: platform,
        fingerprint: fingerprint,
    });
    return deviceDetail;
};

const deleteDevice = async (DB, id) => {
    let deviceDetail = await existDevice(DB, id);
    if (deviceDetail && deviceDetail.id) {
        deviceDetail = await DB.models.Device.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        deviceDetail = await existDevice(DB, id);
    }
    return deviceDetail;
};

const getDevice = async (DB, id) => {
    return existDevice(DB,id);
};

const getAllDevice = async (DB, args) => {
    const deviceDetail = await DB.models.Device.findAll({
        where: args
    });
    return deviceDetail;
};

const updateDevice = async (DB, id, args) => {
    let deviceDetail = await existDevice(DB, id);
    if (deviceDetail && deviceDetail.id) {
        deviceDetail = await DB.models.Device.update(args, { where: { id: id }});
    }
    return deviceDetail;
};

module.exports = {
    activateDevice, createDevice, deleteDevice, existDevice, getDevice, getAllDevice, updateDevice
};