import './knowledgeBaseSearch.css'

export const KnowledgeBaseSearch = () => {
	return (
		<form className='knowledge-base-search'>
			<input type='text' placeholder='Что ищем?' />
			<button>Найти</button>
		</form>
	)
}
