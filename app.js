// import functions and grab DOM elements
import { renderIngredient } from './utils.js';

const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredients-list');
const remove = document.getElementById('remove');

//console.log(ingredientsList);
//console.log(form);
//console.log(remove);


// let state

let mealIngredient = [];

//Functions to add to utils.js later

export function displayIngredients(){
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
    // get user input

    let ingredient = {
        ingredient: formData.get('ingredient'),
        quantity: formData.get('quantity'),
        measurement: formData.get('measurement'),
    };
    // use user input to update state 

    mealIngredient.push(ingredient);
    console.log(ingredient);

  // update DOM to reflect the new state
    displayIngredients();

    //reset the form
    form.reset();
});

//remove ingredient button 

remove.addEventListener('click', () => {
//step 2 add code to allow users to remove the most recent state
//console.log('clicking the remove button');
    mealIngredient.pop();
    displayIngredients();

});