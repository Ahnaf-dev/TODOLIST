import makeElement from "../../utilis/makeElement";
import deleteBtn from "./deleteButton";
import editBtn from "./editButton";
import { reducers } from "../../../redux/reducers";

const todoItem = function ({id,category, title, date, isComplete}) {

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

       <li class="${category} todo-list" data-key="${id}">
       
        <div class="flex-container" id="flex">
       
            <div class="col">
                <h2>${title}</h2>
                <p>Due: ${date}</p>
                <p class="toggle-complete">${message}</p>
            </div>
            <div class="col">
                <p data-key="${id}"></p>
                <div class="btn-flex">
                <a href="#" class="edit-btn"><i class="fas fa-edit fa-2x"></i></a>
                <a href="#" class="delete-btn"><i class="far fa-trash-alt fa-2x"></i></a>
                </div>
            </div>
        </div>
       </li> 
        
    
    `;

  const element = makeElement(template)
 
  return element
 
}

export default todoItem