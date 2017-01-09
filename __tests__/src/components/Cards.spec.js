import 'react-native';
import React from 'react';
import Cards from '../../../src/components/Cards.react';
const StateTree = require('../../../src/stores/StateTree').default;
const EgressActions = require('../../../src/actions/EgressActions');
import { shallow } from 'enzyme';
import SwipeCards from 'react-native-swipe-cards';
import Loading from '../../../src/components/Loading.react';

console.error = jest.fn();

describe('Cards', () => {

    beforeEach(() => {
        EgressActions.requestCards = jest.fn();
    });

    it('can render loading screen', () => {
        const context = {tree: StateTree};
        const wrapper = shallow(<Cards />, { context });
        expect(wrapper.render().find('text').text()).toEqual('Loading cards...');
        expect(EgressActions.requestCards).toHaveBeenCalled();
    });

    it('can render card stack', () => {
        const cards = [
            {
                index: 0,
                key: 'card-1-0',
                large: 'https://example.com/1.webm',
                small: 'https://example.com/1m.webm',
            },
            {
                index: 1,
                key: 'card-1-1',
                large: 'https://example.com/2.webm',
                small: 'https://example.com/2m.webm',
            },
            {
                index: 2,
                key: 'card-1-2',
                large: 'https://example.com/3.webm',
                small: 'https://example.com/3m.webm',
            }
        ];

        StateTree.set('cards', cards);
        const context = {tree: StateTree};
        const wrapper = shallow(<Cards />, { context });

        expect(EgressActions.requestCards).not.toHaveBeenCalled();
        expect(wrapper.render().find('image').length).toEqual(2);
    });

});
