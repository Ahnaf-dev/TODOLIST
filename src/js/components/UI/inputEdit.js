import makeElement from "../../utilis/makeElement";

const inputEdit = function () {

  const template = `<input type="submit" name="submit" value="SUBMIT" id="submit" class="submit-btn">`;
  // const template = `<button type="submit" name="submit" id="submit">Submit</button>`;

  const element = makeElement(template)
 
  return element
 
}

export default inputEdit