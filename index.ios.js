import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Cards from './src/components/Cards.react';
import PropTypes from 'baobab-react/prop-types';
import {root} from 'baobab-react/higher-order';
import StateTree from './src/stores/StateTree';
import Styles from './src/styles/StyleSheet';

export default class SwipeDemo extends Component {

    componentWillMount() {
        console.disableYellowBox = true;
    }

    getChildContext() {
        return {
            tree: StateTree
        };
    }

    render() {
        return (
            <View style={Styles.app}>
                <Cards />
            </View>
        );
    }

}

SwipeDemo.childContextTypes = {
    tree: PropTypes.baobab
};

AppRegistry.registerComponent('SwipeDemo', () => root(StateTree, SwipeDemo));
