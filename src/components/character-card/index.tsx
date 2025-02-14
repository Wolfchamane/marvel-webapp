import Image from 'next/image';
import './styles.sass';
import { FavouriteIcon } from '@/components/index';

export interface CharacterCardProperties {
	name: string;
	image: string;
	isFavourite: boolean;
}

export function CharacterCard({ name, image, isFavourite }: CharacterCardProperties) {
	return (
		<div className={'character-card'}>
			<div className={'character-card__image'}>
				<Image src={image} alt={name} height={189.97} width={172.5} />
				<span className={'character-card__ribbon'}></span>
			</div>
			<div className={'character-card__name'}>
				<span className={'character-card__name-text'}>{name}</span>
				<FavouriteIcon filled={isFavourite} />
			</div>
		</div>
	);
}
