import React from 'react';
import '../setupTest';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import RiskGraphics from '../../components/RiskGraphics.jsx';
import RiskMock from '../../__mocks__/RiskMock';

describe('<RiskGraphics />', () => {
    test('Render RiskGraphics Component', () => {
        const riskGraphics = shallow(
            <ProviderMock>
                <RiskGraphics />
            </ProviderMock>,
        );
      expect(riskGraphics.length).toEqual(1);
    });
    test('change-graph button does not appears when none risk is selected', () => {
        const wrapper = mount(
            <ProviderMock>
                <RiskGraphics risk={{}}/>
            </ProviderMock>,
        );
        expect(wrapper.find('button').length).toBe(0);
        expect(wrapper.find('.selected-risk').length).toBe(0);
    });
    test('change-graph button appears when select a risk', () => {
        const {risk} = {...RiskMock}
        const wrapper = mount(
            <ProviderMock>
                <RiskGraphics {...risk}/>
            </ProviderMock>,
        );
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('.risk-graphics-container table').length).toBe(1);
    });
});