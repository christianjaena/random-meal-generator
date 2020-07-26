import React, { useState, useEffect } from 'react';

const useFetchMeal = () => {
	const [state, setState] = useState(null);
	const [ingredients, setIngredients] = useState([]);
	const [isFetching, setFetching] = useState(true);

	const fetchMeal = async () => {
		try {
			setFetching(false);
			const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
			const fetchMealApi = await fetch(url);
			const response = await fetchMealApi.json();
			setState(response.meals[0]);
			setIngredients([]);
			setFetching(true);
		} catch (err) {
			setState(err);
		}
	};

	useEffect(() => {
		if (state) {
			for (let i = 1; i <= 20; i++) {
				setIngredients(ingredients => [
					...ingredients,
					<li
						key={i}
						style={
							state[`strIngredient${i}`]
								? { display: 'block' }
								: { display: 'none' }
						}
					>
						{state[`strIngredient${i}`]} - {state[`strMeasure${i}`]}
					</li>,
				]);
			}
		}
	}, [state]);

	return {
		state,
		fetchMeal,
		ingredients,
		isFetching
	}
};

export default useFetchMeal;