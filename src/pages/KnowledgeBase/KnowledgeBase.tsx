import { KnowledgeBaseAccordion } from '../../components/KnowledgeBaseAccordion/KnowledgeBaseAccordion'
import { KnowledgeBaseBlock } from '../../components/KnowledgeBaseBlock/KnowledgeBaseBlock'
import { KnowledgeBaseSearch } from '../../components/KnowledgeBaseSearch/KnowledgeBaseSearch'
import './knowledgeBase.css'

const knowledgeBaseData = [
	{
		id: 0,
		title: 'Аккаунт',
		links: ['Вход', 'Регистрация', 'Не могу войти'],
	},
	{
		id: 1,
		title: 'Оплата',
		links: ['Как можно оплатить?', 'Отличия тарифов', 'Проблемы с оплатой'],
	},
	{
		id: 2,
		title: 'Безопасность',
		links: ['Политика конфиденциальности', 'Защита информации'],
	},
]

export const KnowledgeBase = () => {
	return (
		<div className='knowledge-base'>
			<div className='knowledge-base-content'>
				<h2>База знаний</h2>
				<KnowledgeBaseSearch />
				<div className='knowledge-base-content-grid'>
					{knowledgeBaseData.map(card => (
						<KnowledgeBaseBlock key={card.id} {...card} />
					))}
				</div>
				<KnowledgeBaseAccordion />

				<div className='knowledge-base-content-footer'>
					<h1>Не нашли, что искали? Напишите нам!</h1>
					<button>Написать в службу поддержки</button>
				</div>
			</div>
		</div>
	)
}
