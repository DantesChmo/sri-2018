import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {Header} from '../../components/header/index';

describe('Header', () => {
    it('Проверка отрисовки Header', () => {
        const header = shallow(<Header />);
        expect(header).toMatchSnapshot();
    });
});
