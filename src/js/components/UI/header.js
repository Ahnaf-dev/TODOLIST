import makeElement from "../../utilis/makeElement";

const header = function (title="uiHeader", className="header-class") {

  const template = `<h1 class="${className}">${title}</h1>`;

  const element = makeElement(template)
 
  return element
 
}

export default header