import React from 'react';
import '../setupTest';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Table from '../../components/Table.jsx';
import RiskMock from '../../__mocks__/RiskMock';

describe('<Table />', () => {
    test('Render Table Component', () => {
      const table = shallow(
        <ProviderMock>
          <Table />
        </ProviderMock>,
      );
      expect(table.length).toEqual(1);
    });
    test('when coloredRow is false', () => {
        const {risk} = {...RiskMock}
        const wrapper = mount(
            <ProviderMock>
                <Table {...risk} coloredRow={false}/>
            </ProviderMock>,
        );
        expect(wrapper.find('.selected-risk').length).toBe(0);
    });
    test('when coloredRow is true', () => {
        const {risk} = {...RiskMock}
        const wrapper = mount(
            <ProviderMock>
                <Table {...risk} coloredRow/>
            </ProviderMock>,
        );
        expect(wrapper.find('.selected-risk').length).toBe(1);
    });
});