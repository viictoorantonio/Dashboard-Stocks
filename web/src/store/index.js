import { createStore } from 'redux'

const INITIAL_STATE = {
    companySee: 'MSFT',
    companySeeChart: [],
    companySeeQuote: {},
    companySeeDesc: {},

    companysFavorite: [],
    companysRecents: [],
}

function reducer(state = INITIAL_STATE, action) {

    if(action.type === 'SET_FAVORITE_STOCK') {
        return { ...state, companysFavorite: [action.stock, ...state.companysFavorite.filter(item => item.symbol !== action.stock.symbol)] }
    }

    if (action.type === 'DELETE_FAVORITE_STOCK') {
        return { ...state, companysFavorite: state.companysFavorite.filter(item => item.symbol !== action.stock.symbol) }
    }

    if (action.type === 'SET_DATA_COMPANY') {
        return { ...state, companySeeChart: action.company.chart, companySeeQuote: action.company.quote, companySeeDesc: action.desc, companysRecents: [action.company.quote, ...state.companysRecents.filter(item => item.symbol !== action.company.quote.symbol)] }
    }

    if (action.type === 'CHANGE_COMPANY') {
        return { ...state, companySee: action.company  }
    }

    return state
}

export const store = createStore(reducer)