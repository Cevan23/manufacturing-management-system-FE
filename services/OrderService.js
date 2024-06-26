import * as http from "../utils/httpRequest";

export const getAllOrder = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const res = await http.get("/api/orders", config);
        return res;
    } catch (e) {
        console.log("Error at Get order: ", e);
    }
};

export const addOrder = async (token, accountants_id, name, contact, dateEnd, kindOrder) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };
    const data = {
        accountants_id,
        name,
        contact,
        dateEnd,
        kindOrder
    }
    try {
        const res = await http.post(`/api/orders/create`, data, config);
        return res;
    } catch (e) {
        console.log("Error at Add order: ", e);
    }
};

export const deleteOrder = async (token, id) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };
    try {
        const res = await http.del(`/api/orders/${id}`, config);
        return res;
    } catch (e) {
        console.log("Error at Delete order: ", e);
    }
};

export const updateOrder = async (token, id, dateStart, dateEnd, orderStatus) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };
    console.log("dateStart: ", dateStart);
    console.log("dateEnd: ", dateEnd);
    console.log("orderStatus: ", orderStatus);
    const data = {
        id,
        dateStart,
        dateEnd,
        orderStatus
    }
    try {
        const res = await http.put(`/api/orders`, data, config);
        return res;
    } catch (e) {
        console.log("Error at Update order: ", e);
    }
};