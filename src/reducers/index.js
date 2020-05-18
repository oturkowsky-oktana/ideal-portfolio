const reducer = (state,action) => {
    switch (action.type){
        case 'SET_SELECTED_RISK': 
            return {
                ...state,
                risk : {
                    ...state.risk,
                    selectedRisk : action.payload
                }
            }
        case 'SET_PORTFOLIO_RISK': 
            return {
                ...state,
                risk : {
                    ...state.risk,
                    portfolioRisk : action.payload
                }
            }
        default: 
            return state;
    }
}
export default reducer;