import makeElement from "../../utilis/makeElement";

const tagLine = function (title="uiHeader", className="ui-class") {

  const template = `<p class="${className}">${title}</p>`;

  const element = makeElement(template)
 
  return element
 
}

export default tagLine