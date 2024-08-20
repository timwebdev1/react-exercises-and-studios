export default function BookList() {
   let pageTitle = "Classic Fiction";
   let book1 =
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KFYbYrnX6p9Lc0CsdrxDunmNHvy7SJmb9-zlmDqR0lkcO6bb8i7H2jYX&s";
   let book2 =
     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeFn3Oan-XJpEmToMJgRn8LU5u1qnxFMPz0CaMd18tKDloGGI";
   let book3 =
     "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2fSayPTDswrzNeSUjsOMST81oB48quXOtwbkC04OkTQWG_knFOs6FAjw4PQ&usqp=CAc";

   return (
      <div class="bookImages">
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Great Gatsby by F. Scott Fitzgerald" />
         <img src={book2} alt="The Illiad by Homer" />
         <img src={book3} alt="1984 by George Orwell" />
      </div>      
   );
}