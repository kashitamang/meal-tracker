//renderIngredient: returns and HTML element for ingredient data 
export function renderIngredient(booger){
    const li = document.createElement('li');
    li.textContent = `${booger.quantity} ${booger.measurement} ${booger.ingredient}`;
    return li;
}

//`renderMeal` (PURE): 
//which returns an HTML element with meal data (name, total ingredients)

export function renderMeal(booger){
    const li = document.createElement('li');
    li.textContent = `${booger.name}: ${booger.ingredientCount} ingredients`;
    return li;
}