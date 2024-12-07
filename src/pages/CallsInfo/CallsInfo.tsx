import { useState } from 'react'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { CallsInfoSidebar } from '../../components/CallsInfoSidebar/CallsInfoSidebar'
import './callsInfo.css'

const generalCallStatistics = [
	{
		title: '',
		links: [
			{
				name: 'Количество обработанных звонков',
				count: 123456,
			},
			{
				name: 'Общее время звонков',
				count: 123456,
			},
			{
				name: 'Средняя продолжительность звонка',
				count: 123456,
			},
		],
	},
	{
		title: 'Общая статистика звонков',
		links: [
			{
				name: 'Общее количество уникальных клиентов',
				count: 123456,
			},
			{
				name: 'Количество повторных звонков',
				count: 123456,
			},
			{
				name: 'Пиковые часы активности',
				count: 123456,
			},
			{
				name: 'Наименьшая активность',
				count: 123456,
			},
		],
	},
]

const callCategories = [
	{
		label: 'Вопросы по продукту',
		count: 222,
		calls: 32,
	},
	{
		label: 'Жалобы',
		count: 222,
		calls: 32,
	},
	{
		label: 'Вопросы о доставке',
		count: 222,
		calls: 32,
	},
	{
		label: 'Возвраты и обмены',
		count: 222,
		calls: 32,
	},
	{
		label: 'Запросы на скидки',
		count: 222,
		calls: 32,
	},
	{
		label: 'Прочее',
		count: 222,
		calls: 32,
	},
]

export const CallsInfo = () => {
	const [callsTabs, setCallsTabs] = useState(0)
	return (
		<div className='calls-info'>
			<div className='calls-info-content'>
				<h2>отчёт за 11 ноября</h2>
				<div className='calls-info-content-tabs'>
					<div className='calls-info-content-tabs-btns'>
						{['День', 'Неделя', 'Месяц'].map((tab, index) => (
							<button
								key={index}
								onClick={() => setCallsTabs(index)}
								className={callsTabs === index ? 'active-calls-tabs' : ''}
							>
								{tab}
							</button>
						))}
					</div>
					<div className='calls-info-content-tabs-calendar'>
						<input type='month' style={{ opacity: 0 }} id='calendar' />
						<label htmlFor='calendar'>
							Период <IoCalendarNumberOutline />
						</label>
					</div>
				</div>

				{/* calls info sidebar   */}
				{generalCallStatistics.map((info, index) => (
					<div key={index} className='calls-info-content-links'>
						{info.title === '' ? '' : <h3>{info.title}</h3>}
						{info.links.map(link => (
							<div key={link.count} className='calls-info-content-links-item'>
								<p>{link.name}</p>
								<span></span>
								<b>{link.count}</b>
							</div>
						))}
					</div>
				))}

				{/* Call table categories  */}
				<div className='calls-info-content-category'>
					<h3>Категории звонков</h3>
					<table>
						<thead>
							<tr>
								<th className='table-top' scope='col'>
									Категория
								</th>
								<th className='table-top' scope='col'>
									Кол-во звонков
								</th>
								<th className='table-top' scope='col'>
									% звонков
								</th>
							</tr>
						</thead>
						{callCategories.map(table => (
							<tbody>
								<tr>
									<td className='table-bottom'>{table.label}</td>
									<td className='table-bottom'>{table.count}</td>
									<td className='table-bottom'>{table.calls}%</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>

				{/* diagram  */}

				{/* phrases and questions */}
				<div className='calls-info-content-questions'>
					<h3>Выявленные ключевые фразы и вопросы</h3>
					<ul>
						<p>ТОП-5 часто задаваемых вопросов:</p>
						<li>Вопрос 1: 342123</li>
					</ul>
				</div>

				{/* Recommendations for improvement */}

				<div className='calls-info-content-recommendations'>
					<div className='calls-info-content-recommendations-title'>
						<h2>Рекомендации по улучшению</h2>
					</div>

					<div className='calls-info-content-recommendations-descr'>
						<span>Повышение качества сервиса:</span>
						<p>
							Итак, ясно, что вектор нейтрализует изоморфный график функции.
							Относительная погрешность, не вдаваясь в подробности, изменяет
							параллельный контрпример. Приступая к доказательству следует
							безапелляционно заявить, что замкнутое множество существенно
							продуцирует косвенный разрыв функции.
						</p>
					</div>
				</div>
			</div>
			<CallsInfoSidebar />
		</div>
	)
}
