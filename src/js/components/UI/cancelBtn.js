import makeElement from "../../utilis/makeElement";

const cancelBtn = function () {

  const template = `<a href="#" class="cancel-btn"><i class="fas fa-times fa-2x"></i>  Cancel</a>`;

  const element = makeElement(template)
 
  return element
 
}

export default cancelBtn