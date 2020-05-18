import { setSelectedRisk, setPortfolioRisk } from '../../actions';

describe('Actions', () => {
    test('setSelectedRisk Action', () => {
        const payload = 5;
        const expected = {
            type: 'SET_SELECTED_RISK',
            payload,
        };
        expect(setSelectedRisk(payload)).toEqual(expected);
    });
    test('setPortfolioRisk Action', () => {
        const payload = [20,30,40,50,60];
        const expected = {
            type: 'SET_PORTFOLIO_RISK',
            payload,
        };
        expect(setPortfolioRisk(payload)).toEqual(expected);
    });
});