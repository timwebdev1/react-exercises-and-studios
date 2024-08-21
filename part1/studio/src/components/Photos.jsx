import styles from "./Description.module.css";

function RecipePhoto() {
  return (
    <img
      src="https://s23209.pcdn.co/wp-content/uploads/2023/01/220628_DD_Crispy-Baked-Chx-Tacos_363-1-480x720.jpg"
      alt="recipe photo"
      className={styles.imageUpdates}
    />
  );
}

export default RecipePhoto;