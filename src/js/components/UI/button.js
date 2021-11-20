import makeElement from "../../utilis/makeElement";

const button = function (button="uiButton", className="ui-button") {

  const template = `<button class="${className}">${button}</button>`;

  const element = makeElement(template)
 
  return element
 
}

export default button