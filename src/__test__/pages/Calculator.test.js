import React from 'react';
import '../setupTest';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Calculator from '../../pages/Calculator.jsx';

describe('<Calculator />', () => {
    test('Render Calculator Component', () => {
        const calculator = shallow(
            <ProviderMock>
                <Calculator />
            </ProviderMock>,
        );
      expect(calculator.length).toEqual(1);
    });
});