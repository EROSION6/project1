import { Link } from 'react-router-dom'

export const Tariffs = () => {
	return (
		<section id='tariffs' className='main-payment'>
			<h2 className='main-payment__title'>
				<span>Тарифные</span>планы
			</h2>

			<div className='main-payment-wrapper'>
				<div className='main-payment-content-wrapper'>
					<div className='main-payment-content-about first'>
						<h4 className='main-payment-content-about__title first_title'>
							Free
						</h4>
						<p className='main-payment-content-about__descr first_descr'>
							До <span>1 часа </span>аудио или видео в месяц
						</p>
						<div className='main-payment-content-about-advantages'>
							<p className='main-payment-content-about-advantage first_advantage'>
								Автоматическая транскрипция аудио/видео
							</p>
							<p className='main-payment-content-about-advantage first_advantage'>
								Стандартные опции редактирования текста
							</p>
							<p className='main-payment-content-about-advantage first_advantage'>
								Экспорт результатов в TXT и PDF форматы
							</p>
							<p className='main-payment-content-about-advantage first_advantage'>
								Основная поддержка через форум и FAQ
							</p>
						</div>
						<div className='main-payment-block'>
							<div className='main-payment-block-prices width100percent'>
								<p className='main-payment-block-prices__price width100percent'>
									$0
								</p>
							</div>
							<Link to='/dashboard/' style={{ textDecoration: 'none' }}>
								<button className='main-payment-block_payment-button'>
									<p className='button_text'>Оставить заявку</p>
								</button>
							</Link>
						</div>
					</div>

					<div className='main-payment-content-advantages'>
						<h4 className='main-payment-content-advantages__title'>
							Идеален для:
						</h4>
						<div className='main-payment-content-advantages-wrapper'>
							<span className='main-payment-content-advantage'>
								Индивидуальных пользователей
							</span>
							<span className='main-payment-content-advantage'>Cтудентов</span>
							<span className='main-payment-content-advantage'>
								Фрилансеров
							</span>
							<span className='main-payment-content-advantage'>
								Начинающих блогеров
							</span>
						</div>
					</div>
				</div>

				<div className='main-payment-content-wrapper'>
					<div className='main-payment-content-about second'>
						<h4 className='main-payment-content-about__title second_title'>
							PRO
						</h4>
						<p className='main-payment-content-about__descr second_descr'>
							До <span>10 часов</span> аудио или видео в месяц.
						</p>
						<div className='main-payment-content-about-advantages'>
							<p className='main-payment-content-about-advantage second_advantage'>
								Все функции базового плана
							</p>
							<p className='main-payment-content-about-advantage second_advantage'>
								Генерация контента для соцсетей и блогов
							</p>
							<p className='main-payment-content-about-advantage second_advantage'>
								Расширенные опции редактирования
							</p>
							<p className='main-payment-content-about-advantage second_advantage'>
								Интеграция с популярными платформами
							</p>
							<p className='main-payment-content-about-advantage second_advantage'>
								Экспорт в дополнительные форматы
							</p>
							<p className='main-payment-content-about-advantage second_advantage'>
								Приоритетная техническая поддержка
							</p>
						</div>
						<div className='main-payment-block '>
							<div className='main-payment-block-prices'>
								<p className='main-payment-block-prices__price second_text'>
									$29.99<span>/мес</span>
								</p>
								<p className='main-payment-block-prices__price second_text'>
									$299<span>/год</span>
								</p>
							</div>
							<Link to='/dashboard/' style={{ textDecoration: 'none' }}>
								<button className='main-payment-block_payment-button second_button_text'>
									<p className='button_text'>Оставить заявку</p>
								</button>
							</Link>
						</div>
					</div>

					<div className='main-payment-content-advantages mobile_second'>
						<h4 className='main-payment-content-advantages__title'>
							Идеален для:
						</h4>
						<div className='main-payment-content-advantages-wrapper add'>
							<span className='main-payment-content-advantage secondAdvantages'>
								Профессиональных журналистов
							</span>
							<span className='main-payment-content-advantage secondAdvantages'>
								Малых и средних предприятий
							</span>
							<span className='main-payment-content-advantage secondAdvantages'>
								Маркетологов
							</span>
						</div>
					</div>
				</div>

				<div className='main-payment-content-wrapper'>
					<div className='main-payment-content-about third'>
						<h4 className='main-payment-content-about__title third_title'>
							Corporate
						</h4>
						<p className='main-payment-content-about__descr third_descr'>
							<span>Неограниченное </span>количество часов
						</p>
						<div className='main-payment-content-about-advantages'>
							<p className='main-payment-content-about-advantage third_advantage'>
								Все функции профессионального плана
							</p>
							<p className='main-payment-content-about-advantage third_advantage'>
								Многопользовательский доступ с индивидуальными настройками
							</p>
							<p className='main-payment-content-about-advantage third_advantage'>
								Настройки и персонализации под конкретные нужды организации
							</p>
							<p className='main-payment-content-about-advantage third_advantage'>
								Расширенные SEO-инструменты и аналитика
							</p>
							<p className='main-payment-content-about-advantage third_advantage'>
								Персональный менеджер проекта
							</p>
							<p className='main-payment-content-about-advantage third_advantage'>
								Выделенная команда поддержки и персональный менеджер.
							</p>
						</div>
						<div className='main-payment-block'>
							<div className='main-payment-block-prices'>
								<p className='main-payment-block-prices__price'>
									$99.99<span>/мес</span>
								</p>
								<p className='main-payment-block-prices__price'>
									$999<span>/год</span>
								</p>
							</div>
							<Link to='/dashboard/' style={{ textDecoration: 'none' }}>
								<button className='main-payment-block_payment-button'>
									<p className='button_text'>Оставить заявку</p>
								</button>
							</Link>
						</div>
					</div>
					<div className='main-payment-content-advantages'>
						<h4 className='main-payment-content-advantages__title'>
							Идеален для:
						</h4>
						<div className='main-payment-content-advantages-wrapper'>
							<span className='main-payment-content-advantage'>
								Активно использующих контент.
							</span>
							<span className='main-payment-content-advantage'>
								Крупных организаций
							</span>
							<span className='main-payment-content-advantage'>
								Медиакомпаний
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='main-payment-free'>
				<h3 className='main-payment-free__title'>Бесплатная пробная версия</h3>
				<p className='main-payment-free__descr'>
					Для всех платных планов предлагается 14-дневная бесплатная пробная
					версия, позволяющая пользователям оценить полный функционал сервиса
					перед покупкой подписки.
					<br />
					<br />
					Это поможет увеличить доверие пользователей и способствовать их
					переходу на платные планы после окончания пробного периода.
				</p>
			</div>
		</section>
	)
}
