import "./styling.css";
import ClickedButton from "./ClickedButton"; "./ClickedButton";
import SaveButton from "./SaveButton"; "./SaveButton";

function Button({ saveButton }) {



   return saveButton ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 