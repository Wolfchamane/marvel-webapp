import './styles.sass';
import { Link } from 'react-router';

export interface CharacterCardProperties {
	id: number;
	name: string;
	image: string;
	isFavourite: boolean;
}

export function CharacterCard({ id, name, image, isFavourite }: CharacterCardProperties) {
	return (
		<Link className={'character-card'} to={`${import.meta.env.VITE_BASE_PATH}character/${id}`}>
			<div className={'character-card__image'}>
				<img src={image} alt={name} height={189.97} width={172.5} />
			</div>
			<div className={'character-card__name'}>
				<span className={'character-card__ribbon'}></span>
				<span className={'character-card__name-text'}>{name}</span>
				<div
					className={['character-card__heart', isFavourite ? 'character-card__heart--filled' : '']
						.filter(Boolean)
						.join(' ')}
				/>
			</div>
		</Link>
	);
}
