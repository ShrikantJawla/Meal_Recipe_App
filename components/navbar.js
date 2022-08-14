/** @format */

function navbar() {
	return `<a href="./index.html">Home</a>
			<div class="searchDiv">
				<input type="text" id="searchBar" placeholder="Search..." />
				<i class="fa-solid fa-magnifying-glass"></i>
			</div>
			<div class="displaySearchedData"></div>
			<a href="./randomRecipe.html">Random Recipe</a>
			<a href="./recipeOfDay.html">Recipe Of Day</a>
			<a href="signIn.html">Sign In</a>
			<a href="signUp.html">Sign Up</a>`;
}

export default navbar;
