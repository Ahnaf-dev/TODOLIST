import homePage from "../pages/home";
import toDoPage from "../pages/toDoPage";
import notFound from "../pages/notFound";
import deletePage from "../pages/deletePage";
import editPage from "../pages/editPage";
import addingPage from "../pages/addPage";
const routes = {

  '/':homePage,
  '/todoapp':toDoPage,
  '/*':notFound,
  '/deletepage':deletePage,
  '/editpage':editPage,
  '/addingpage': addingPage
}


const Router = function(pathname, params=null) {

  const isValidRoute = Object.keys(routes).find(key=> key===pathname)

  

  const app = document.querySelector('#app')
  app.innerHTML = ''

  window.history.pushState (
    {},
    pathname,
    window.location.origin + pathname
  )

  if (isValidRoute === undefined || isValidRoute ==='') {
    app.append(notFound())
  } else {
    app.appendChild(routes[isValidRoute](params))

  }


}





export {routes}
export default Router