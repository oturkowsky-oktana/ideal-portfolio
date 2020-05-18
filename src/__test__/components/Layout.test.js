import React from 'react';
import '../setupTest';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Layout from '../../components/Layout.jsx';

describe('<Layout />', () => {
    test('Render Layout Component', () => {
      const layout = shallow(
        <ProviderMock>
          <Layout />
        </ProviderMock>,
      );
      expect(layout.length).toEqual(1);
    });
});