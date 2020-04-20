const existState = async (DB, id) => {
    const stateDetail = await DB.models.State.findOne({
        where: {id: id}
    });
    return stateDetail;
};

const activateState = async (DB, id) => {
    let stateDetail = await existState(DB, id);
    if (stateDetail && stateDetail.id) {
        stateDetail = await DB.models.State.update(
            { isHidden: 0, }, 
            { returning: true, where: { id: id }}
        );
        stateDetail = await existState(DB, id);
    }
    return stateDetail;
};

const createState = async (DB, name, countryId, loccode, status) => {
    let stateDetail = await DB.models.State.create({
        name: name,
        countryId: countryId,
        loccode: loccode,
        status: status,
    });
    return stateDetail;
};

const deleteState = async (DB, id) => {
    let stateDetail = await existState(DB, id);
    if (stateDetail && stateDetail.id) {
        stateDetail = await DB.models.State.update(
            { isHidden: 1, }, 
            { returning: true, where: { id: id }}
        );
        stateDetail = await existState(DB, id);
    }
    return stateDetail;
};

const getState = async (DB, id) => {
    return existState(DB,id);
};

const getAllState = async (DB, args) => {
    const stateDetail = await DB.models.State.findAll({
        where: args
    });
    return stateDetail;
};

// const getAllStateFilter = async (DB, args) => {
//     const stateDetail = await DB.models.State.findAll({
//         where: args
//     });
//     return stateDetail;
// };

// const getAllActiveState = async (DB) => {
//     const stateDetail = await DB.models.State.findAll({
//         where: {isHidden: 0}
//     });
//     return stateDetail;
// };

// const getAllCountryState = async (DB, countryId) => {
//     const stateDetail = await DB.models.State.findAll({
//         where: {countryId: countryId}
//     });
//     return stateDetail;
// };

// const getAllActiveCountryState = async (DB, countryId) => {
//     const stateDetail = await DB.models.State.findAll({
//         where: {isHidden: 0, countryId: countryId}
//     });
//     return stateDetail;
// };


const updateState = async (DB, id, args) => {
    let stateDetail = await existState(DB, id);
    if (stateDetail && stateDetail.id) {
        stateDetail = await DB.models.State.update(args, {
            where: { id: state.id }
        });
        stateDetail = await existState(DB, id);
    }
    return stateDetail;
};

module.exports = {
    activateState, createState, deleteState, existState, getState, updateState,
    getAllState,
};