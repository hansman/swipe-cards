import React, {Component} from 'react';
import { Animated, Image, Text, View } from 'react-native';
import {branch} from 'baobab-react/higher-order';
import Card from './Card.react';
import Entypo from 'react-native-vector-icons/Entypo';
import Loading from './Loading.react';
import Styles from '../styles/StyleSheet';
import SwipeCards from 'react-native-swipe-cards';

class Cards extends Component {

    constructor(props, context) {
        super(props, context);
        this.prefetch = this.prefetch.bind(this);
        this.cardRemoved = this.cardRemoved.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            cards: this.props.cards || []
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({cards: nextProps.cards});
    }

    prefetch(index) {
        const cards = this.state.cards;
        let card = cards[index];
        if (card) {
            Image.prefetch(card.small);
        }
    }

    handleYup() {
        // TODO: Submit voting to a backend
    }

    handleNope() {
        // TODO: Submit voting to a backend
    }

    onClickHandler(left) {
        if (left) {
            this.refs.deck._forceLeftSwipe();
        } else {
            this.refs.deck._forceRightSwipe();
        }
    }

    renderYup(pan) {
        let opacity = pan.x.interpolate({ inputRange: [0, 150], outputRange: [0, 1] });
        return (
            <View style={[Styles.button, Styles.buttonYup]}>
                <Animated.View style={[Styles.button, Styles.buttonYupOverlay, {opacity: opacity}]}>
                    <Text onPress={this.onClickHandler.bind(this, false)}>
                        <Entypo color='green' name='check' size={40}/>
                    </Text>
                </Animated.View>
                <Text style={Styles.buttonColor}><Entypo name='check' size={40}/></Text>
            </View>
        );
    }

    renderNope(pan) {
        let opacity = pan.x.interpolate({ inputRange: [-150, 0], outputRange: [1, 0] });
        return (
            <View style={[Styles.button, Styles.buttonNope]}>
                <Animated.View style={[Styles.button, Styles.buttonNopeOverlay, {opacity: opacity}]}>
                    <Text onPress={this.onClickHandler.bind(this, true)}>
                        <Entypo color='red' name='cross' size={40}/>
                    </Text>
                </Animated.View>
                <Text style={Styles.buttonColor}><Entypo size={40} name='cross'/></Text>
            </View>
        );
    }

    cardRemoved(index) {
        if ((index + 1) == this.state.cards.length) {
            this.setState({cards: []});
            return;
        }
        // Prefetch next cards.
        this.prefetch(index + 2);
        this.prefetch(index + 3);
    }

    render() {

        const cards = this.state.cards;

        if (!cards.length) {
            return (<Loading />);
        }

        return (<SwipeCards
            ref='deck'
            cards={cards}
            stack={true}
            stackDepth={2}
            cardKey='key'
            loop={false}
            dragY={false}
            stackOffsetX={0}
            stackOffsetY={0}
            allowGestureTermination={true}
            onClickHandler={this.onClickHandler}
            renderCard={(cardData) => <Card {...cardData} />}
            renderYup={this.renderYup}
            renderNope={this.renderNope}
            cardRemoved={this.cardRemoved}
            handleYup={this.handleYup}
            handleNope={this.handleNope}
        />);

    }

}

export default branch({
    cards: ['cards']
}, Cards);
