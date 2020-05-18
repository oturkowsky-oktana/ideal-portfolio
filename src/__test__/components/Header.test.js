import React from 'react';
import '../setupTest';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header.jsx';

describe('<Header />', () => {
    test('Render Header Component', () => {
      const header = shallow(
        <ProviderMock>
          <Header />
        </ProviderMock>,
      );
      expect(header.length).toEqual(1);
    });
    test('Render Header Title', () => {
      const header = mount(
        <ProviderMock>
          <Header />
        </ProviderMock>,
      );
      expect(header.find('.header-title').text()).toEqual('Financial Advisor');
    });
});