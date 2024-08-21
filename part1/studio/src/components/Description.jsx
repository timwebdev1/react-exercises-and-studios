import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://damndelicious.net/blog/";
  let authorPhoto =
    "https://s23209.pcdn.co/wp-content/uploads/2021/05/about.jpg";
  let authorName = "Chungah Rhee";

  return (
    <div className={styles.recipieAuthorBlock}>
      <img src={authorPhoto} alt="Chungah preparing delicious baked tacos" className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Damn Delicious</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>CRISPY BAKED CHICKEN TACOS</h1>
          <p>
            With an easy chicken filling and the most fragrant spices, cilantro
            and a little bit of cheese, these come together very quickly. And
            that little brush of oil prior to baking help these bad boys crisp
            up in the oven so so perfectly.
          </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
