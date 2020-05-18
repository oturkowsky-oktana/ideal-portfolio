import reducer from '../../reducers';

describe('Reducers', () => {
    test('Should return the initial state', () => {
        expect(reducer({}, '')).toEqual({});
    });
    test('SET_SELECTED_RISK', () => {
        const initialState = {
            risk: {
                selectedRisk: 0,
            }
        };
        const payload = 5;
        const action = {
            type: 'SET_SELECTED_RISK',
            payload,
        };
        const expected = {
            risk: {
                selectedRisk: payload,
            }
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
    test('SET_PORTFOLIO_RISK', () => {
        const initialState = {
            risk : {
                portfolioRisk : []
            }
        };
        const payload = [20,30,40,50,60];
        const action = {
            type: 'SET_PORTFOLIO_RISK',
            payload,
        };
        const expected = {
            risk : {
                portfolioRisk : payload
            }
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
});