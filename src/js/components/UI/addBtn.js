import makeElement from "../../utilis/makeElement";

const addBtn = function () {

  const template = `<a href="#" class="add-btn"><i class="fas fa-plus-circle fa-5x"></i></a>`;

  const element = makeElement(template)
 
  return element
 
}

export default addBtn