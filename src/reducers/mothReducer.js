const monthReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case 'changeMoth':
            return {
                ...state,
                mothSelected: action.payload
            }
        case 'setAllListCosts':
            return {
                ...state,
                allCost: action.payload
            }
        case 'startLoadingGetAllCost':
            return {
                ...state,
                isLoading: true
            }
        case 'stopLoadingGetAllCost':
            return {
                ...state,
                isLoading: false
            }
        case 'setBalanceOfMoth':
            return {
                ...state,
                selectedMoth: {
                    ...state.selectedMoth,
                    selectedCostByMoth: action.payload.selectedCostByMoth,
                    income: action.payload.income,
                    spent: action.payload.spent,
                }
            }
        default:
            return state;
    }
}

export default monthReducer;