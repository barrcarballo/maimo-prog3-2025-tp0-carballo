const main = async () => {
    const API_URL = `https://dummyjson.com/recipes?limit=20&skip=0`
    const response = await fetch(API_URL)
    const recipesData =  await response.json();
    console.log(recipesData)

    const recetasGrid = document.querySelector(`.recetasGrid`)

    recipesData.recipes.forEach(recipe => {
        recetasGrid.innerHTML += `
        <div class="receta">
        <img src="${recipe.image}" alt="${recipe.name}"/>
            <h3>${recipe.name}</h3>
            <a href="/recipe.html?id=${recipe.id}"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7zm4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4" stroke-width="0.5" stroke="#000"/></svg> </a>
        </div>
        `
    })
} 
main()

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle');
    const nav = document.querySelector('nav');

    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });