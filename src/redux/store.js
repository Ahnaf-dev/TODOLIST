/*



    createStore() - creates the store

    getStore() - gets access to the store

    store = [] - initializes the store as an empty array




*/

let store = null;

// first time creating data so its an empty array as default
const createStore = function(data=[]) {

    // checks if data has been set
    if (store === null) {

        // sets store to new data array using spread operator
        store = [...data]
    }
}

// access the store
const getStore = function () {
    return store
}

const updateStore = function (newState) {
    store = [...newState]
}


export {createStore, getStore, updateStore}