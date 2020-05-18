

//Spoontaclur, the website I got the API from only allows 150 searches per day for free. If you want to change the number of answers returned, you cna change it, but don't make it too high.
//You can switch between API keys if you run out of calls
var number = 10;
//var apiKey = "1156867767634ca4b74a435dd346c48d";
var apiKey = "d60b2979d94d4ca7835395a14e9d85a5";

function getRecipesByUrl(url) {
	return $.get(url)
		.then(function (data) {
			console.log(`Data from url ${url}:`);
			console.log(data);
			var recipes = null;
			if (data.results) {
				recipes = data.results;
			} else {
				recipes = data
			}
			let promises = recipes.map(recipe =>
				$.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=${apiKey}`)
			);
			return Promise.all(promises);
		})
		.then(function (recipeInfoArray) {
			console.log("Recipe info array:");
			console.log(recipeInfoArray);
			return recipeInfoArray.map(function (info) {
				let ingredients = info.extendedIngredients.map(ingredient => ingredient.name);
				return ({
					title: info.title,
					image: info.image,
					url: info.sourceUrl,
					ingredients: ingredients,
					summary: info.summary
				})
			});
		})
		.fail(function (error) {
			let message = `Something went wrong: ${JSON.stringify(error)}`
			console.log(message);
			return message;
		});

}

function getRecipesByIngredients(ingredients) {
	url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${number}&apiKey=${apiKey}`
	return getRecipesByUrl(url);
}

function getRecipesByType(type) {
	url = `https://api.spoonacular.com/recipes/complexSearch?type=${type}&number=${number}&apiKey=${apiKey}`
	return getRecipesByUrl(url);
}

// searchString is either the list of ingredients, or the type to search for
// searchType is either 'ingredients' or 'type'
function navigateToRecipePage(searchString, searchType) {
	localStorage.setItem('searchStringLabel', searchString);
	localStorage.setItem('searchTypeLabel', searchType);
	window.document.location = 'recipes.html';
}
