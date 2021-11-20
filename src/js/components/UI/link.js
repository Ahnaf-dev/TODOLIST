import makeElement from "../../utilis/makeElement";
import Router from "../../routes/router";

const onRequestNewPage = function(e) {

  e.preventDefault()
  Router(e.currentTarget.dataset.path)
  return false
}


const link = function (title="uiHeader", path='/', className="ui-class") {

  const template = `<a href="${path}" class="${className}" data-path="${path}">${title}</a>`;

  const element = makeElement(template)
  element.addEventListener('click', onRequestNewPage)
 
  return element
 
}

export default link