// import functions and grab DOM elements
import { renderIngredient, renderMeal} from './utils.js';

const form = document.getElementById('add-ingredients');
const ingredientsList = document.getElementById('ingredients-list');
const remove = document.getElementById('remove');
const save = document.getElementById('save-button');
const mealList = document.getElementById('meal-list');
const mealName = document.getElementById('meal-name');

//console.log(ingredientsList);
//console.log(form);
//console.log(remove);
console.log(save);
console.log(mealList);
console.log(mealName);

// let state

let mealIngredient = [];
let meals = [];

//Functions 

//(IMPURE) loops through each ingredient, calls renderIngredient and appends to DOM
function displayIngredients(){
    ingredientsList.textContent = '';
    for (let booger of mealIngredient){
        const li = renderIngredient(booger);
        ingredientsList.appendChild(li);
    }
}

//(IMPURE) loops through each meal, calls renderMeal and appends to DOM
function displayMeals(){
    mealList.textContent = '';
    for (let booger of meals){
        const li = renderMeal(booger);
        mealList.appendChild(li);
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
    //console.log(ingredient);

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

save.addEventListener('click', () => {
  //step 3- add code to allow users to save the state
    console.log('clicking meal button');
  //
    mealList.value = '';

    let meal = {
        ingredientCount: mealIngredient.length,
        name: mealName.value,
    };
    meals.push(meal);
    console.log('list of meals', meal);

    displayMeals();

});
