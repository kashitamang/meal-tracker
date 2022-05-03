// import functions and grab DOM elements

const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredients-list');

//console.log(ingredientsList);


// let state

let mealIngredient = [];

//Functions to add to utils.js later

//renderIngredient: returns and HTML element for ingredient data 
function renderIngredient(booger){
    const li = document.createElement('li');
    li.textContent = `${booger.quantity} ${booger.measurement} ${booger.ingredient}`;
    return li;
}
//`displayIngredients` (IMPURE) loops through each ingredient
//calls renderIngredient and appends to DOM
function displayIngredients(){
    ingredientsList.textContent = '';
    for (let booger of mealIngredient){
        const li = renderIngredient(booger);
        ingredientsList.appendChild(li);
    }
}

// set event listeners 

//add ingredient button 
form.addEventListener('submit', (e) => {
    e.preventDefault();
//console.log('submitting the form');
//step1 add the code to track each submission to the ingredients list

    const formData = new FormData(form);
//console.log(formData.get('ingredient'));
//console.log(formData.get('quantity'));
//console.log(formData.get('measurement'));

//create an object to "model" ingredient like so:
// {ingredient: 2 cups chips}
//create object from the form, push it onto the ingredients array
    let ingredient = {
        ingredient: formData.get('ingredient'),
        quantity: formData.get('quantity'),
        measurement: formData.get('measurement'),
    };

    mealIngredient.push(ingredient);
    console.log(ingredient);

    displayIngredients();

    //reset the form
    form.reset();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
