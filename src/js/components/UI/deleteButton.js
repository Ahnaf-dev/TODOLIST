import makeElement from "../../utilis/makeElement";

const deleteBtn = function () {

  const template = `<a href="#" class="delete-btn"><i class="far fa-trash-alt fa-2x"></i>Delete</a>`;

  const element = makeElement(template)
 
  return element
 
}

export default deleteBtn