import makeElement from "../../utilis/makeElement";
import { reducers } from "../../../redux/reducers";

const displayDelete = function ({id,category, title, date, isComplete}) {

 let message
    switch (isComplete) {

        case true:
             message = "Completed"
            break;
        case false:
            message = ""    
            break;
    }

    

    const template = `
            <div class="class="${category} todo-list" data-key="${id}">
                <h2>${title}</h2>
                <p>Due: ${date}</p>
                <p class="toggle-complete">${message}</p>
            </div>    
    
    `;

  const element = makeElement(template)
 
  return element
 
}

export default displayDelete