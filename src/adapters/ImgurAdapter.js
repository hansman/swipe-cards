import config from '../config';
import * as IngressActions from '../actions/IngressActions';
import Promise from 'bluebird';
import url from 'url';

const nets = Promise.promisify(require('nets'));

const imgurGet = function(path) {
    return Promise.all([
        nets({
            url: url.format(config.imgur) + path,
            method: 'GET',
            headers: {
                Authorization: `Client-ID ${config.imgur.clientId}`
            }
        }),
        /*
         * If the request is fast the loading component
         * is rendered too short to read the text.
         */
        Promise.delay(config.minLoadingScreen)
    ]);
};

export default {

    getCards: function(deck) {
        imgurGet(`gallery/hot/viral/${deck}.json`).then((resp) => {
            const body = JSON.parse(resp[0].body);
            if (!body.success) {
                return Promise.reject(new Error(body.data.error));
            }
            IngressActions.receiveCards(body.data);
        }).catch((err) => {
            console.warn('ImgurAdapter#getCards failed', err);
            IngressActions.receiveCardsFailed();
        });
    }

}
