
import {createRoot} from "react-dom/client";
const root = createRoot(document.getElementById('root'));
root.render(
<div>
<form >
  <fieldset>
    <legend>MY FORM </legend>
 Name  <input type="text" id="name " placeholder="Enter your name here" /> <br/><br/>
 Roll no. <input type="text" id="roll" placeholder="Enter your roll no here" /><br/><br/>
 marks <input type="text" id="marks" placeholder="Enter your marks here" /><br/><br/>
 Batch<input type="text" id="batch" placeholder="Enter your batch here" /><br/><br/>
  <button type="submit" id ="value">Submit</button>
  </fieldset>
</form>
</div>)