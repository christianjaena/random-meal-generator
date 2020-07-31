import React from 'react';

const SavedRecipes = ({ isDropdownOpen, savedRecipes }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				overflow: 'scroll',
			}}
		>
			{isDropdownOpen
				? savedRecipes?.map((recipe, idx) => {
						return (
							<div key={idx}>
								<p>{recipe}</p>
							</div>
						);
				  })
				: savedRecipes.length}
		</div>
	);
};

export default SavedRecipes;
