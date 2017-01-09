import 'react-native';
import React from 'react';
const IngressActions = require('../../../src/actions/IngressActions');
const StateTree = require('../../../src/stores/StateTree').default;

const cards = [
    {
        link: 'http://example.com/1.webm',
        size: 1,
        'is_album': false
    },
    {
        link: 'http://example.com/2.webm',
        size: 1,
        'is_album': true
    },
    {
        link: 'http://example.com/3.webm',
        size: Math.pow(2, 24),
        'is_album': false
    }
];

describe('Ingress Actions', () => {

    it('can receive cards', () => {
        StateTree.set(['fetch', 'pending'], true);
        StateTree.set(['fetch', 'failed'], true);
        StateTree.set(['page'], 1);

        IngressActions.receiveCards(cards);

        expect(StateTree.get(['fetch', 'pending'])).toBe(false);
        expect(StateTree.get(['fetch', 'failed'])).toBe(false);
        expect(StateTree.get('page')).toBe(2);
        expect(StateTree.get('cards')).toEqual([{
            index: 0,
            key: 'card-1-0',
            large: 'https://example.com/1.webm',
            small: 'https://example.com/1m.webm',
        }]);
    });

    it('can fail to receive cards', () => {
        StateTree.set(['fetch', 'pending'], true);
        StateTree.set(['fetch', 'failed'], false);

        IngressActions.receiveCardsFailed();

        expect(StateTree.get(['fetch', 'pending'])).toBe(false);
        expect(StateTree.get(['fetch', 'failed'])).toBe(true);
    });

});
