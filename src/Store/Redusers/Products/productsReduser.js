export const ProductsListReduser = (state = {products : []} , action) => {
    switch (action.type) {
        case 'PRODUCTS_REQUEST':
            return {loading : true , products : []}
        case 'PRODUCTS_REQUEST_DONE' : 
            return {loading : false , products : action.payload}
        default:
            return state
    }
} 