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


const addingPage = function(id) {

     
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
    const addButton = inputEdit()
    const cancelButton = cancelBtn()

    // event listeners

    function cleanUp() {
        cancelButton.removeEventListener('click',onCancelEdit)

    }

    function onCancelEdit(e) {
        cleanUp()
        Router('/todoapp')

    }



    cancelButton.addEventListener('click',onCancelEdit)


//     // page content
const section = document.createElement('section')
const h2 = document.createElement('h2')
h2.innerText = "Add Item"
section.append(h2)

    const template = `
        <div class="display-container ${styles.editPage}">
            <form action="#" class="${styles.form}" name="inputedit">
                <div class="form-group">
                    <label for="ID">ID</label>
                    <input type="text" id="ID" name="ID" >
                </div>
                <div class="form-group">
                <label for="category">Category</label>
                <select name="category" id="category">
                    <option value="Health">Health</option>
                    <option value="Social">Social</option>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="School">School</option>
                </select>
                </div> 
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" >
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="text" id="date" name="date">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" id="description" name="description">
                </div>
                
                
                <div class="flex-btn form-btn">
                
                </div>
                
           </form>
        </div>
   `
   const content = makeElement(template)
   console.log(content)
   section.append(content)
   section.querySelector('.flex-btn').append(cancelButton)
   section.querySelector('.flex-btn').append(addButton)
   page.append(section)


// //    add functionality

//    var form = section.querySelector("form")
    
//     form.onsubmit = function () {
        
//         id = document.getElementById('ID').value
//         category = document.getElementById('category').value
//         title = document.getElementById('title').value
//         date = document.getElementById('date').value
//         description = document.getElementById('description').value
//         // isComplete = document.getElementById('complete').value

//         // console.log(isComplete)
//        const obj = {
//           "id": id,
//           "category": category,
//           "title": title,
//           "date": date,
//           "description": description,
//           "isComplete":false
//        }

    
//        const action = {
//                 type:"add",
//                 payload:{obj},
//                 cb:() => cleanUp()
//             }
    
            
//             reducers(action)
            
//             Router('/todoapp')
//     }



    

    return page

  
}



export default addingPage