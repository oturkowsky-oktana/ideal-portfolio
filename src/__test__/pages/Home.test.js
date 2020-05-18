import React from 'react';
import '../setupTest';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Home from '../../pages/Home.jsx';

describe('<Home />', () => {
    test('Render Home Component', () => {
        const home = shallow(
            <ProviderMock>
                <Home />
            </ProviderMock>,
        );
      expect(home.length).toEqual(1);
    });
});