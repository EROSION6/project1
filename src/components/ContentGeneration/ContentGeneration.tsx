export const ContentGeneration = () => {
	return (
		<div className='main-functions-content-block-content'>
			<div className='main-functions-content-block-content-block'>
				<h4 className='main-functions-content-block-content-block__title'>
					Адаптация контента:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Механизмы адаптации текста под разные форматы, такие как:
				</p>
				<div className='main-functions-content-block-content-block-add new_flex'>
					<span className='flags_concrete add_border'>Научные статьи</span>
					<span className='flags_concrete add_border'>Блоги</span>
					<span className='flags_concrete add_border'>Рекламные материалы</span>
					<span className='flags_concrete add_border'>Посты в соцсетях</span>
				</div>
			</div>
			<div className='main-functions-content-block-content-block pos_rel'>
				<h4 className='main-functions-content-block-content-block__title'>
					SEO-оптимизация:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Инструменты для включения ключевых слов, которые помогут улучшить
					видимость контента в поисковых системах.
				</p>
				<img src='./img/magicHat.png' className='magicHat' alt='Magic Hat' />
			</div>

			<div className='main-functions-content-block-content-block pos_rel third_el'>
				<h4 className='main-functions-content-block-content-block__title'>
					Интеграция с социальными сетями для автоматической публикации
					созданного контента.
				</h4>
				<img
					src='./img/messengers.png'
					className='magicHat third_el_img'
					alt='#'
				/>
			</div>
		</div>
	)
}
