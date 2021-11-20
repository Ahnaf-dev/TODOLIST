import makeElement from "../../utilis/makeElement";

const editBtn = function () {

  const template = `<a href="#" class="edit-btn"><i class="fas fa-edit fa-2x"></i>Edit</a>`;

  const element = makeElement(template)
 
  return element
 
}

export default editBtn