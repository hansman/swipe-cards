import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import autobind from 'autobind-decorator';
import Styles from '../styles/StyleSheet';

class Card extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            url: this.props.small,
            error: null
        };
    }

    @autobind onError(err) {
        console.info('Card#onError', err);
        // Load original image if thumbnail does not exist
        if (this.state.url != this.props.large) {
            this.setState({
                url: this.props.large
            });
        } else {
            this.setState({
                error: 'Failed to load card.'
            });
        }

    }

    render() {
        if (this.state.error) {
            return (
                <View style={Styles.card}>
                    <Text>{this.state.error}</Text>
                </View>
            );
        }
        return (
            <View style={Styles.card}>
                <Image
                    onError={this.onError}
                    style={Styles.cardImage}
                    resizeMode='contain'
                    source={{uri: this.state.url + 'asdf'}}
                />
            </View>
        );
    }

}

export default Card;
