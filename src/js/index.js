import Router from "./routes/router";
import dataFetcher from "./utilis/dataFetcher";
import {keyGenerator} from "./utilis/keys";
import {createStore, getStore} from "../redux/store";






const onAppInit = async function (e) {
    // Pull data - store data - display data
    
    const todos =  await dataFetcher('./data/todos.json')
    
    createStore(keyGenerator(todos))
    
    Router(window.location.pathname)
    
}


window.addEventListener('load',onAppInit)