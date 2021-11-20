import makeElement from "../../utilis/makeElement";
import todoItem from "./todoItem";



const toDoList = function () {

  const ul = document.createElement('ul')

  ul.classList.add("toDo")


  return ul

}

export default toDoList