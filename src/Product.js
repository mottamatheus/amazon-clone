import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';

function Product({ id, title, price, image, rating }) {
	const [ { basket }, dispatch ] = useStateValue();
	console.log(basket);
	const addToBasket = () => {
		//dispatch the item to the data layer
		dispatch({
			type : 'ADD_TO_BASKET',
			item : {
				id     : id,
				title  : title,
				image  : image,
				price  : price,
				rating : rating
			}
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill().map((_, i) => {
						return (
							<p>
								<GradeRoundedIcon className="product__rating--icon" />
							</p>
						);
					})}
				</div>
			</div>

			<img src={image} />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
