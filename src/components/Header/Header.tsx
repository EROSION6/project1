import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className='header'>
			<div id='top' className='header-logo'>
				<a href='#top' className='header-logo__link'>
					<img
						src='./img/logo.png'
						className='header-logo__img'
						alt='Логотип Transcripto.ai'
					/>
				</a>
			</div>
			<div className='header-pop-up'>
				<div className='header-pop-up-burger'></div>
			</div>
			<div className='header-pop-up-menu'>
				<nav className='header-nav'>
					<nav className='header-nav'>
						<a href='#services' className='header-nav__link'>
							Функционал сервиса
						</a>
						<a href='#tariffs' className='header-nav__link'>
							Тарифы
						</a>
						<a href='#materials' className='header-nav__link'>
							Обучающие материалы
						</a>
						<a href='#contacts' className='header-nav__link'>
							Контакты
						</a>
					</nav>
				</nav>
				<div className='header-dropdown'>
					<div className='header-dropdown__toggle'>
						<p id='dropdown-text'>RU</p>
						<span className='header-dropdown__toggle__arrow'></span>
					</div>
					<div className='header-dropdown-menu'>
						<div className='header-dropdown__item'>RU</div>
						<div className='header-dropdown__item'>EN</div>
						<div className='header-dropdown__item'>DE</div>
					</div>
				</div>
				<div className='header-buttons'>
					<Link className='header-buttons__button' to='/login'>
						Вход
					</Link>
					<Link className='header-buttons__button' to='/register'>
						Регистрация
					</Link>
				</div>
			</div>
			<nav className='header-nav dis'>
				<a href='#services' className='header-nav__link'>
					Функционал сервиса
				</a>
				<a href='#tariffs' className='header-nav__link'>
					Тарифы
				</a>
				<a href='#materials' className='header-nav__link'>
					Обучающие материалы
				</a>
				<a href='#contacts' className='header-nav__link'>
					Контакты
				</a>
			</nav>
			<div className='header-dropdown dis'>
				<div className='header-dropdown__toggle'>
					<p id='dropdown-text'>RU</p>
					<span className='header-dropdown__toggle__arrow'></span>
				</div>
				<div className='header-dropdown-menu'>
					<div className='header-dropdown__item'>RU</div>
					<div className='header-dropdown__item'>EN</div>
					<div className='header-dropdown__item'>DE</div>
				</div>
			</div>
			<div className='header-buttons dis'>
				<Link className='header-buttons__button' to='/login'>
					Вход
				</Link>
				<Link className='header-buttons__button' to='/register'>
					Регистрация
				</Link>
			</div>
		</header>
	)
}
