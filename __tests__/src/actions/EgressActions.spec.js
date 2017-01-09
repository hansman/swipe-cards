import 'react-native';
import React from 'react';
const EgressActions = require('../../../src/actions/EgressActions');
const StateTree = require('../../../src/stores/StateTree').default;
const ImgurAdapter = require('../../../src/adapters/ImgurAdapter').default;

describe('Egress Actions', () => {

    beforeEach(() => {
        ImgurAdapter.getCards = jest.fn();
    });

    it('can request cards', () => {
        expect(StateTree.get(['fetch', 'pending'])).toBe(false);
        EgressActions.requestCards();
        expect(ImgurAdapter.getCards).toHaveBeenCalled();
        expect(StateTree.get(['fetch', 'pending'])).toBe(true);
    });

    it('does not request cards if they are already being fetched', () => {
        StateTree.set(['fetch', 'pending'], true);
        EgressActions.requestCards();
        expect(ImgurAdapter.getCards).not.toHaveBeenCalled();
        expect(StateTree.get(['fetch', 'pending'])).toBe(true);
    });

});
