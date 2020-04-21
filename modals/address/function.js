const existAddress = async (DB, id) => {
    const addressDetail = await DB.models.Address.findOne({
        where: {id: id}
    });
    return addressDetail;
};

const activateAddress = async (DB, id) => {
    let addressDetail = await existAddress(DB, id);
    if (addressDetail && addressDetail.id) {
        addressDetail = await DB.models.Address.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        addressDetail = await existAddress(DB, id);
    }
    return addressDetail;
};

const createAddress = async (DB, name, building, landmark, street, pincode, stateId, userId) => {
    let addressDetail = await DB.models.Address.create({
        name: name,
        building: building,
        landmark: landmark,
        street: street,
        pincode: pincode,
        stateId: stateId,
        userId: userId,
    });
    return addressDetail;
};

const deleteAddress = async (DB, id) => {
    let addressDetail = await existAddress(DB, id);
    if (addressDetail && addressDetail.id) {
        addressDetail = await DB.models.Address.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        addressDetail = await existAddress(DB, id);
    }
    return addressDetail;
};

const getAddress = async (DB, id) => {
    return existAddress(DB,id);
};

const getAllAddress = async (DB, args) => {
    const addressDetails = await DB.models.Address.findAll({
        where: args
    });
    return addressDetails;
};

const updateAddress = async (DB, id, args) => {
    let addressDetail = await existAddress(DB, id);
    if (addressDetail && addressDetail.id) {
        addressDetail = await DB.models.Address.update(args, { where: { id: id }});
    }
    return addressDetail;
};

module.exports = {
    activateAddress, createAddress, deleteAddress, existAddress, getAddress, getAllAddress, updateAddress
};