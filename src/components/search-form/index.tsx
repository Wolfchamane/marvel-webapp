import './styles.sass';
import { type FormEvent, useState } from 'react';
import { SearchInput } from '@/components';

export interface SearchFormProperties {
	results: number;
	onSearch(text: string): Promise<void>;
}

export function SearchForm({ results, onSearch }: SearchFormProperties) {
	const [search, setSearch] = useState('');

	const handleInputChange = async (value: string): Promise<void> => {
		setSearch(value);
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		if ('stopPropagation' in e) {
			e.stopPropagation();
			e.preventDefault();
			await onSearch(search);
		}
	};

	return (
		<form className={'search-form'} onSubmit={onSubmit}>
			<SearchInput onChange={handleInputChange} />
			<span className={'search-form__results'}>
				{results >= 2 ? `${results} resultados` : results === 1 ? `${results} resultado` : 'sin resultados'}
			</span>
		</form>
	);
}
