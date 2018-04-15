import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

it('renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><Home/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe("Home - test suite", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter><Home/></MemoryRouter>
        );
    });

    it('Should render required H1', () => {
        const h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Hello. This is example app created with ReactJS');
    });

    it('Should render link', () => {
        const button = wrapper.find('a .btn-primary');
        expect(button.text()).toBe('See Posts');
        
    });
});
