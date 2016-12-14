import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Cards from './src/components/Cards.react';
import {root} from 'baobab-react/higher-order';
import StateTree from './src/stores/StateTree';
import Styles from './src/styles/StyleSheet'

class Challenge2 extends Component {

    componentWillMount() {
        console.disableYellowBox = true;
    }

    render() {
        return (
            <View style={Styles.app}>
                <Cards />
            </View>
        );
    }

}

AppRegistry.registerComponent('challenge2', () => root(StateTree, Challenge2));
