const existOrderHistory = async (DB, id) => {
    const orderHistoryDetail = await DB.models.OrderHistory.findOne({
        where: {id: id}
    });
    return orderHistoryDetail;
};

const activateOrderHistory = async (DB, ids) => {
    let orderHistoryDetails = [];
    ids.forEach(async(id) => {
        let orderHistoryDetail = await existOrderHistory(DB, id);
        if (orderHistoryDetail && orderHistoryDetail.id) {
            orderHistoryDetail = await DB.models.OrderHistory.update(
                { isHidden: 1, }, 
                { returning: true, where: { id: id }}
            );
            orderHistoryDetail = await existOrderHistory(DB, id);
            orderHistoryDetails.push(orderHistoryDetail);
        } 
    });
    return orderHistoryDetails;
};

const createOrderHistory = async (DB, total, status, fromDate, toDate, userId, bannerId) => {
    let orderHistoryDetail = await DB.models.OrderHistory.create({
        total: total,
        status: status,
        fromDate: fromDate,
        toDate: toDate,
        userId: userId,
        bannerId: bannerId,
    });
    return orderHistoryDetail;
};

const deleteOrderHistory = async (DB, ids) => {
    let orderHistoryDetails = [];
    ids.forEach(async(id) => {
        let orderHistoryDetail = await existOrderHistory(DB, id);
        if (orderHistoryDetail && orderHistoryDetail.id) {
            orderHistoryDetail = await DB.models.OrderHistory.update(
                { isHidden: 1, }, 
                { returning: true, where: { id: id }}
            );
            orderHistoryDetail = await existOrderHistory(DB, id);
            orderHistoryDetails.push(orderHistoryDetail);
        } 
    });
    return orderHistoryDetails;
};

const getOrderHistory = async (DB, id) => {
    return existOrderHistory(DB,id);
};

const getAllOrderHistory = async (DB, args) => {
    const orderHistoryDetail = await DB.models.OrderHistory.findAll({
        where: args
    });
    return orderHistoryDetail;
};

const updateOrderHistory = async (DB, id, args) => {
    let orderHistoryDetail = await existOrderHistory(DB, id);
    if (orderHistoryDetail && orderHistoryDetail.id) {
        orderHistoryDetail = await DB.models.OrderHistory.update(args, { where: { id: id }});
    }
    return orderHistoryDetail;
};

module.exports = {
    activateOrderHistory, createOrderHistory, deleteOrderHistory, existOrderHistory, getOrderHistory, getAllOrderHistory, updateOrderHistory
};