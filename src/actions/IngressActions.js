import StateTree from '../stores/StateTree';
import url from 'url';
import _ from 'lodash';

const cardsCursor = StateTree.select('cards');
const pageCursor = StateTree.select('page');
const fetchCursor = StateTree.select('fetch');

export default {

    receiveCards: function(cards) {
        fetchCursor.set(['pending'], false);
        fetchCursor.set(['failed'], false);
        const page = pageCursor.get();
        pageCursor.set(page + 1);

        cards = _.filter(cards, (card) => {
            return !card['is_album'] && card.link && (card.size < Math.pow(2, 23));
        });

        cards = cards.map((card, index) => {
            let link = url.parse(card.link);
            link.protocol = 'https:';
            const large = url.format(link);
            let pathname = link.pathname.split('.');
            let ending = pathname.pop();
            link.pathname = pathname.join('.') + 'm.' + ending;
            const small = url.format(link);
            return {
                key: `card-${page}-${index}`,
                index,
                small, // thumbnail (320x320)
                large // original
            };
        });

        cardsCursor.set(cards);
        StateTree.commit();

    },

    receiveCardsFailed: function() {
        fetchCursor.set(['pending'], false);
        fetchCursor.set(['failed'], true);
        StateTree.commit();
    }
}
