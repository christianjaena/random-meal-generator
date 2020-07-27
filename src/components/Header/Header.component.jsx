import React from 'react';
import styled from 'styled-components';

const StickyHeader = styled.div`
	align-self: flex-end;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	width: 10%;
	height: ${({ dropDown }) => (dropDown ? '100px' : '50px')};
	background-color: red;
`;
const Header = ({ savedRecipes }) => {
	const [isDropdownOpen, setIsDropDownOpen] = React.useState(false);
	return (
		<StickyHeader
			onClick={() => setIsDropDownOpen(!isDropdownOpen)}
			dropDown={isDropdownOpen}
		>
			{isDropdownOpen
				? savedRecipes?.map((recipe, idx) => {
						console.log(recipe.recipeName)
						return (
							<div key={idx}>
								<p>{recipe?.recipeName}</p>
							</div>
						);
				  })
				: savedRecipes.length}
		</StickyHeader>
	);
};

export default Header; 