import { Dimensions, StyleSheet} from 'react-native';

let { width, height} = Dimensions.get('window');

const margin = 30;
const cardWidth = 360;
const buttonRadius = 35;

export default StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    button: {
        height: buttonRadius * 2,
        width: buttonRadius * 2,
        borderWidth: 1,
        borderRadius: buttonRadius,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        padding: 15,
        position: 'absolute'
    },
    buttonNope: {
        bottom: margin,
        left: buttonRadius * 2,
    },
    buttonYup: {
        bottom: margin,
        right: buttonRadius * 2
    },
    buttonColor: {
        color: 'rgba(0, 0, 0, 0.4)'
    },
    buttonNopeOverlay: {
        borderColor: 'red',
        bottom: -1,
        left: -1,
        zIndex: 2
    },
    buttonYupOverlay: {
        borderColor: 'green',
        bottom: -1,
        right: -1,
        zIndex: 2
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: cardWidth,
        height: (height - (buttonRadius * 2 + margin * 2) - margin),
        backgroundColor: 'white',
        marginTop: margin,
        marginLeft: (width - cardWidth) / 2,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 1,
        shadowOffset: {
            width: 2,
            height: 1
        }
    },
    cardImage: {
        width: 320,
        height: 320,
        borderRadius: 5
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadmore: {
        textAlign: 'center',
        width: 300
    }
});
