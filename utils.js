//renderIngredient: returns and HTML element for ingredient data 
export function renderIngredient(booger){
    const li = document.createElement('li');
    li.textContent = `${booger.quantity} ${booger.measurement} ${booger.ingredient}`;
    return li;
}
//`displayIngredients` (IMPURE) loops through each ingredient
//calls renderIngredient and appends to DOM