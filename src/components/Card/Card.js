import './Card.css';
import Calculator from '../Calculator/Calculator';
import Informations from '../Informations/Informations';

function Card() {
	return (
		<div className='card'>
			<div className='card__title'>
				<h2>Kalkulator rusztów na wymiar</h2>
			</div>
			<button className='card__btnColor'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='30'
					height='30'
					fill='currentColor'
					class='bi bi-circle-half'
					viewBox='0 0 16 16'
				>
					<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z' />
				</svg>
			</button>
			<div className='card__boxes'>
				<Calculator />
				<Informations />
			</div>
		</div>
	);
}

export default Card;