import axios from "axios";

export const ProductListAction = () => async (dispatch) => {
    try{
        dispatch({type : 'PRODUCTS_REQUEST'})

        const {data} = await axios.get('./products.json')

        dispatch({type : 'PRODUCTS_REQUEST_DONE' , payload: data.items})
    }catch(error){
        console.log(error)
    }
}

