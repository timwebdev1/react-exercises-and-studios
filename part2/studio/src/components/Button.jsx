import "./styling.css";
import ClickedButton from "./ClickedButton"; "./ClickedButton";
import SaveButton from "./SaveButton"; "./SaveButton";

function Button(props) {
  const saveButton = props.saveButton

  if (saveButton) {
    return <SaveButton />; 
  } else {
    return <ClickedButton />;
  };


   return;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 