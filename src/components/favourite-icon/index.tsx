import Image from 'next/image';
// @ts-ignore
import heartEmpty from '@/assets/heart_empty.png';
// @ts-ignore
import heartFilled from '@/assets/heart_filled.png';

export interface FavouriteIconProperties {
	filled?: boolean;
}

export function FavouriteIcon({ filled }: FavouriteIconProperties) {
	return <Image src={filled ? heartFilled : heartEmpty} alt={'Favourite'} />;
}
