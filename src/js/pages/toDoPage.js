import header from "../components/UI/header"
import logo from "./../components/UI/logo";
import link from "../components/UI/link";
import tagLine from "../components/UI/tagline";
import todoItem from "../components/UI/todoItem";
import toDoList from "../components/UI/todoList";
import { reducers } from "../../redux/reducers";
import editBtn from "../components/UI/editButton";
import { getStore } from "../../redux/store";
import addBtn from "../components/UI/addBtn";
import { add } from "lodash";
import Router from "../routes/router";

const toDoPage = function() {

  const toDoDiv = document.createElement('div')

  const toDoHeader = document.createElement('header')
  toDoHeader.classList.add("toDoHeader")
  const h1 = header("PURIFY YOUR DAY","brandHeading")
  // const todoApp = link('to do page app','/','home-btn')
  const brandTag = tagLine("Get Your Noble Deeds Done With Our To-Do List!","tag")

  toDoHeader.append(h1)
  toDoHeader.append(brandTag)
  // theHeader.append(todoApp)
 
  const section = document.createElement('section')
  
    // making addtoDo component and add button
    

    // cleanup

    function cleanUp() {
      // addButton.removeEventListener('click', onAddToDo)
      const todolists = section.querySelectorAll('li')
      todolists.forEach(todolist=> {
        todolist.removeEventListener('click', onDeleteTodo)
        todolist.removeEventListener('click', onEditTodo)
        
      })

     
    }

    

    // function for delete button


    
    function onDeleteTodo (e) {
      const todoID = e.currentTarget.parentElement.parentElement.querySelector('p').dataset.key
      cleanUp()
      Router('/deletepage', todoID)
      
    }

    function onEditTodo (e) {
      const todoID = e.currentTarget.parentElement.parentElement.querySelector('p').dataset.key
      const populateEdit = getStore()

      populateEdit.forEach(item => {
        if (item.id === todoID) {
          Router('/editpage', todoID)
        }
      })

      cleanUp()
      
      
    }
    
    
    // UL list for todo items
 function render() {
      const list = getStore()
      const container = toDoList()

    // adding individual todoitems into the UL
      if(list.length !== 0) {
        const elements =  list.map(todo => {
          return todoItem(todo)
          })

        
      

        elements.forEach(elm=> {

          elm.querySelector('.delete-btn').addEventListener('click', onDeleteTodo)
          elm.querySelector('.edit-btn').addEventListener('click', onEditTodo)
          
          container.append(elm)
        })

       
        section.append(container)
    }

 }   

 render()

 

  const addToDo = document.createElement('div')
  addToDo.classList.add('add-container')
  const addButton = addBtn()
  addButton.addEventListener('click', onAddToDo)
  


  function onAddToDo () {

    Router('/addingpage',1)
  }
 
  addToDo.append(addButton)


  section.append(addToDo)
  toDoDiv.append(toDoHeader)
  toDoDiv.append(section)
 
 return toDoDiv
 
 
}

export default toDoPage













//  const test = editBtn();
//   toDoDiv.append(test)

//   test.addEventListener('click', function () {
//     const action={type:"edit"}
//     const payload={id:1, updates:"some updates to do"}
//     const mesg = reducers({action, payload})
//     console.log(mesg)
// })




//  const test = editBtn();
//   toDoDiv.append(test)

//   test.addEventListener('click', function () {
//     const action={type:"edit"}
//     const payload={id:1, updates:"some updates to do"}
//     const mesg = reducers({action, payload})
//     console.log(mesg)
// })