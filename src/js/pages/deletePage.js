import makeElement from "../utilis/makeElement"
import link from "../components/UI/link"
import { getStore } from "../../redux/store"
import header from "../components/UI/header"
import tagLine from "../components/UI/tagline"
import deleteBtn from "../components/UI/deleteButton"
import Router from "../routes/router"
import todoItem from "../components/UI/todoItem"
import editBtn from "../components/UI/editButton"
import cancelBtn from "../components/UI/cancelBtn"
import displayDelete from "../components/displayDelete"
import styles from "./styles.module.scss"
import { reducers } from "../../redux/reducers"

const deletePage = function(id) {


    const page = document.createElement('div')
    
    // header
    const toDoHeader = document.createElement('header')
    toDoHeader.classList.add("toDoHeader")
    const h1 = header("PURIFY YOUR DAY","brandHeading")
    const brandTag = tagLine("Get Your Noble Deeds Done With Our To-Do List!","tag")
    toDoHeader.append(h1)
    toDoHeader.append(brandTag)

    page.append(toDoHeader)


    // Section

    const deleteButton = deleteBtn()
    const cancelButton = cancelBtn()  

    function cleanUp() {
        cancelButton.removeEventListener('click',onCancelDelete)
        deleteButton.removeEventListener('click', onDeleteTodoID)

    }

    function onCancelDelete(e) {
        cleanUp()
        Router('/todoapp')

    }

    function onDeleteTodoID (e) {
        

        // get index of getstore() array
        const index = getStore().findIndex(todolist => {
            return todolist.id === id
        })

        // send index to reducer
        
        const action = {
            type:"delete",
            payload:{index},
            cb:() => cleanUp()
        }

        reducers(action)
        Router('/todoapp')
       
    }

    cancelButton.addEventListener('click',onCancelDelete)
    deleteButton.addEventListener('click', onDeleteTodoID)

    const template = `
        <section id="delete-section" class="${styles.deletePage}">
            <h2 id="test">Delete Item</h2>
            <div class="display-container"></div>
            <div class="flex-btn"></div>
        </section>
    `
    const section = makeElement(template)

    section.querySelector('.flex-btn').append(deleteButton)
    section.querySelector('.flex-btn').append(cancelButton)

        const todoID = id
        const list = getStore();

        list.forEach(element => {
            
            if (element.id === todoID) {

                const deleteItem = displayDelete(element)
                section.querySelector('.display-container').append(deleteItem)

            }
        });
        
        

        page.append(section)
        return page
}

export default deletePage