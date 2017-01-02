import ImgurAdapter from '../adapters/ImgurAdapter'
import StateTree from '../stores/StateTree';

const pageCursor = StateTree.select('page');
const fetchCursor = StateTree.select('fetch');

export function requestCards() {
    const fetch = fetchCursor.get();
    if (fetch.pending) {
        return;
    }
    const page = pageCursor.get();
    ImgurAdapter.getCards(page);
    fetchCursor.set(['pending'], true);
    StateTree.commit();
}
