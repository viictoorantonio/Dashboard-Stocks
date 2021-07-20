export function setFavoriteStock(stock) {
    return {
        type: 'SET_FAVORITE_STOCK',
        stock
    }
}

export function deleteFavoriteStock(stock) {
    return {
        type: 'DELETE_FAVORITE_STOCK',
        stock
    }
}