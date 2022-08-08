import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
}
    from "../constants/productConstant"
import Axios from "axios";

export const listProducts = (currentPage = 1, price, make,condition) => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        // let link = `/showroom?page=${currentPage}&price[lte]=${price[1]}
        // &price[gte]=${price[0]}`
        let link = `/showroom?page=${currentPage}`

        if(make){
            let link = `/showroom?page=${currentPage}&make=${make}&condition=${condition}`
        }
        const { data } = await Axios.get(link);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
        const { data } = await Axios.get(`/product/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};