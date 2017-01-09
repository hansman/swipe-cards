import 'react-native';
import React from 'react';
import Index from '../index.android.js';
import renderer from 'react-test-renderer';

describe('Android', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <Index />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
