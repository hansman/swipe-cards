import config from '../config';
import * as EgressActions from '../actions/EgressActions';
import React, {Component} from 'react';
import Styles from '../styles/StyleSheet';
import { Button, Text, View } from 'react-native';
import {branch} from 'baobab-react/higher-order';

class Loading extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            noNewCards: false
        };
    }

    componentWillMount() {
        EgressActions.requestCards();
        this.timeout = setTimeout(() => {
            /*
             * If there are no new cards with in {config.noMoreCardsTimeout}
             * ms, either because the request times out or every
             * request returns an empty array of cards, inform
             * the user that there are no new cards in the moment.
             */
            this.setState({noNewCards: true});
        }, config.noMoreCardsTimeout);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    onPress() {
        EgressActions.requestCards();
    }

    render() {

        if ((this.props.fetchFailed && !this.props.pending) || this.state.noNewCards) {
            return (
                <View style={Styles.loading}>
                    <Text style={Styles.loadmore}>There are no further cards in the moment. Come back and load more later.</Text>
                    <Button
                        onPress={this.onPress}
                        title='load cards'
                    />
                </View>
            );
        }

        return (
            <View style={Styles.loading}>
                <Text>Loading cards...</Text>
            </View>
        );
    }

}

export default branch({
    fetchFailed: ['fetch', 'failed'],
    pending:  ['fetch', 'pending']
}, Loading);
