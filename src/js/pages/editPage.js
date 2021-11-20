import makeElement from "../utilis/makeElement"
import link from "../components/UI/link"
import { getStore } from "../../redux/store"
import header from "../components/UI/header"
import tagLine from "../components/UI/tagline"
import editBtn from "../components/UI/editButton"
import inputEdit from "../components/UI/inputEdit"
import Router from "../routes/router"
import todoItem from "../components/UI/todoItem"
import editBtn from "../components/UI/editButton"
import cancelBtn from "../components/UI/cancelBtn"
import displayDelete from "../components/displayDelete"
import styles from "./styles.module.scss"
import { reducers } from "../../redux/reducers"


const editPage = function(id) {

     
    const page = document.createElement('div')
    
    //-------------------------- header ------------------------------------
    const toDoHeader = document.createElement('header')
    toDoHeader.classList.add("toDoHeader")
    const h1 = header("PURIFY YOUR DAY","brandHeading")
    const brandTag = tagLine("Get Your Noble Deeds Done With Our To-Do List!","tag")
    toDoHeader.append(h1)
    toDoHeader.append(brandTag)
    page.append(toDoHeader)
    // ---------------------------------------------------------------------
    const editButton = inputEdit()
    const cancelButton = cancelBtn()

    function cleanUp() {
        cancelButton.removeEventListener('click',onCancelEdit)

    }

    function onCancelEdit(e) {
        cleanUp()
        Router('/todoapp')

    }



    cancelButton.addEventListener('click',onCancelEdit)

    const template = `
            <section id="delete-section" class="${styles.editPage}">
                <h2 >Edit Item</h2>
                <div class="display-container">
                </div>
            </section>
    `
  const section = makeElement(template)

    const todoID = id
    
    const list = getStore();

    list.forEach(element => {
        
        if (element.id === todoID) {

            const template1 = `
            
            <form action="#" class="${styles.form}"  data-netlify="true" name="inputedit">
               <div class="form-group">
                    <label for="ID">ID</label>
                    <input type="text" id="ID" name="ID" value="${element.id}">
               </div>
               <div class="form-group">
                <label for="category">Category</label>
                <select name="category" id="category" value="${element.category}">
                    <option value="Health">Health</option>
                    <option value="Social">Social</option>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="School">School</option>
                </select>
               </div> 
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" value="${element.title}">
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="text" id="date" name="date" value="${element.date}">
                </div>
                <div class="form-group" id="mb-3">
                    <label for="description">Description</label>
                    <input type="text" id="description" name="description" value="${element.description}">
                </div>
               
                 <div class="flex-btn form-btn">
                  
                 </div>
                
            </form>
            `

            

            const form = makeElement(template1) 
            section.querySelector('.display-container').append(form)
        }
    });
    
    
    
    // adding buttons
    section.querySelector('.flex-btn').append(cancelButton)
    section.querySelector('.flex-btn').append(editButton)
    
    // adding form to section
    page.append(section)
    

    var form = section.querySelector("form")

    form.onsubmit = function () {
        
        id = document.getElementById('ID').value
        category = document.getElementById('category').value
        title = document.getElementById('title').value
        date = document.getElementById('date').value
        description = document.getElementById('description').value
    
       const obj = {
          "id": id,
          "category": category,
          "title": title,
          "date": date,
          "description": description,
          "isComplete":false
       }

       const index = getStore().findIndex(todolist => {
                return todolist.id === todoID
            })
    
       const action = {
                type:"edit",
                payload:{index, obj},
                cb:() => cleanUp()
            }
    
        reducers(action)
     
        Router('/todoapp')
    }
    


   
    return page

  
}



export default editPage