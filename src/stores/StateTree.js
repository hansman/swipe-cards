import Baobab from 'baobab';

const StateTree = new Baobab(
{
    cards: [],
    page: 0,
    fetch: {
    	pending: false,
    	failed: false
    }
},
{
    autoCommit: false,
    immutable: process.env.NODE_ENV == 'development'
});

export default StateTree;
