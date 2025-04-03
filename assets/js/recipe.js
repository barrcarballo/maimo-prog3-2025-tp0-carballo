const main = async () => {
    const searchParams = new URLSearchParams(window.location.search); // obtiene los ID de la url
    const id = searchParams.get('id'); // guarda el ID de la url
    //console.log(searchParams.get('id')); // price_descending


    const API_URL = `https://dummyjson.com/recipe/${id}`; // las `` permiten meter js. 
    const response = await fetch(API_URL);
    const recipe = await response.json();

    console.log(recipe);


    const recetaContainer = document.querySelector('.recetaContainer');

    recetaContainer.innerHTML = `
        <div class="receta">
            <img src="assets/imgs/foodiegoodieAgenda.png" alt="blocknote" class="blocknote"/>
            <img src="${recipe.image}" alt="${recipe.name}"/>
            <h1>${recipe.name}</h1>
            <p><span class = "bold">Tiempo de preparación: </span> ${recipe.prepTimeMinutes} min</p>
            <p> <span class = "bold">Tiempo de cocción: </span>${recipe.cookTimeMinutes} min</p>
            <p><span class = "bold">Porciones:</span> ${recipe.servings}</p>
            <h3>Ingredientes:</h3>
            <ul>
               ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instrucciones:</h3>
            <ol>
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
            <a href="index.html" class="back-button">Back</a>
        </div>
    `;
};

main();


