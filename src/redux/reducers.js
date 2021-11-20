
/**
 * 
 *   Strategy for managing data.
 */

import { update } from "lodash";
import { getStore, updateStore } from "./store";

const reducers = function(action) {

    switch(action.type) {
        case "delete": 
            const store = getStore()
            const index = action.payload.index
            const newState = [...store.slice(0,index), ...store.slice(index+1)]
            updateStore(newState)
            action.cb()
            return null
        ;
        case "edit":
           const store1 = getStore()
           const index1 = action.payload.index
           const newState1 = [...store1.slice(0,index1), action.payload.obj, ...store1.slice(index1+1)]
           updateStore(newState1)
           action.cb()
            return null
        ;
        case "add":
            const store2 = getStore()
            const newState2 = [...store2, action.payload.obj]
            updateStore(newState2)
            action.cb()
        return null
        ;
        default: return getStore()
    }
}

export {reducers}