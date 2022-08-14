/** @format */

let fetchData = async (url) => {
	let res = await fetch(url);
	let data = await res.json();
	return data.meals;
};

function append(data, container) {
	container.innerHTML = null;
	data.forEach((ele) => {
		let { strArea, strCategory, strMeal, strMealThumb, strYoutube, idMeal } =
			ele;
		let div = document.createElement("div");
		div.classList.add("recipe");
		div.innerHTML = `<img
					class="mealImage"
					src="${strMealThumb}"
					alt="${strMeal}"
				/>
				<p class="mealName">${strMeal}</p>`;
		div.style.cursor = "pointer";
		div.addEventListener("click", () => {
			let d = { name: strMeal, id: idMeal };
			localStorage.setItem("Meal", JSON.stringify(d));
			window.location.href = "./display.html";
		});
		container.append(div);
	});
}
function appendFullDetails(data, container) {
	container.innerHTML = null;
	data.forEach((ele) => {
		let {
			idMeal,
			strArea,
			strCategory,
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
			strIngredient6,
			strIngredient7,
			strIngredient8,
			strInstructions,
			strMeal,
			strMealThumb,
			strTags,
			strYoutube,
		} = ele;
		let div = document.createElement("div");
		div.classList.add("recipe");
		div.innerHTML = `<img
					class="mealImage"
					src="${strMealThumb}"
					alt="${strMeal}"
				/>
				<p class="mealName">${strMeal}</p>
				<p class="category">${strCategory}</p>
				<p class="area">${strArea}</p>
                <p class="instructions">${strInstructions}</p>
				<div class="ingredientsContainer">
					<p class="ingredientsHeading">Ingrdients</p>
					<div class="ingredients">
						<p>${strIngredient1},${strIngredient2},${strIngredient3},${strIngredient4},${strIngredient5},${strIngredient6},${strIngredient7},${strIngredient8},</p>
					</div>
                <div/>
                    <p class="tags">${strTags}</p>
				<a class='watchRecipe'
					href="${strYoutube}"
                    target="_blank"
					>Watch Recipe</a
				>`;
		container.append(div);
	});
}

function appendDataUnderSearchBar(data, container) {
	container.innerHTML = null;
	data.forEach((ele) => {
		let { strArea, strCategory, strMeal, strMealThumb, strTags, idMeal } = ele;
		let div = document.createElement("div");
		div.classList.add("result");
		div.innerHTML = `<img
						src="${strMealThumb}"
						alt="${strMeal}"
					/>
					<p>${strMeal}</p>
				</div>`;
		div.style.cursor = "pointer";
		div.addEventListener("click", () => {
			let d = { name: strMeal, id: idMeal };
			localStorage.setItem("Meal", JSON.stringify(d));
			window.location.href = "./display.html";
		});
		container.append(div);
	});
}

let appendbuttons = (data, container) => {
	container.innerHTML = null;
	data.forEach((ele) => {
		let { strCategory } = ele;
		let button = document.createElement("button");
		button.classList.add("catBtn");
		button.innerText = strCategory;
		button.addEventListener("click", () => {
			let cont = document.querySelector(".container");
			cont.innerHTML = null;
			fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
			)
				.then((res) => res.json())
				.then((data) => {
					append(data.meals, cont);
				});
		});
		container.append(button);
	});
};

export {
	fetchData,
	append,
	appendFullDetails,
	appendDataUnderSearchBar,
	appendbuttons,
};
