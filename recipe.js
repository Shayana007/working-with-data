import React  from "react";

function RecipeTitle(props) {
    
const recipe = {
    title: 'Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
};
<RecipeTitle title={ recipe.title } />
    return (
        <section>
            <h2>{ props.title }</h2>
        </section>
        
    )
};

export default RecipeTitle;