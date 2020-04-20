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

const createAddress = async (DB, name, building, landmark, street, pincode, stateId) => {
    let addressDetail = await DB.models.Address.create({
        name: name,
        building: building,
        landmark: landmark,
        street: street,
        pincode: pincode,
        stateId: stateId,
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

const updateAddress = async (DB, id, args) => {
    let addressDetail = await existAddress(DB, id);
    if (addressDetail && addressDetail.id) {
        addressDetail = await DB.models.Address.update(args);
    }
    return addressDetail;
};

module.exports = {
    activateAddress, createAddress, deleteAddress, existAddress, getAddress, updateAddress
};