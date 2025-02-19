import './styles.sass';
import type { ChangeEvent } from 'react';
import { SearchIcon } from '@/components';

export interface SearchInputProperties {
	onChange(value: string): void;
}

export function SearchInput({ onChange }: SearchInputProperties) {
	return (
		<div className={'form-control'}>
			<SearchIcon />
			<input
				className={'form-input'}
				type={'text'}
				placeholder={'Search a character ...'}
				onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
			/>
		</div>
	);
}
