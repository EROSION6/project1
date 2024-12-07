export const Footer = () => {
	return (
		<footer id='contacts' className='footer'>
			<div className='footer-rights'>
				<h3 className='footer-rights__logo'>TRANSCRIPTO</h3>
				<p className='footer-rights__year'>2024 © Runpay Solutions LTD</p>
			</div>
			<div className='footer-contacts'>
				<a href='#' className='footer-contacts__link'>
					<img
						className='footer-contacts__img'
						src='/img/mail.png'
						alt='mail'
					/>
				</a>
				<a href='#' className='footer-contacts__link'>
					<img
						className='footer-contacts__img'
						src='/img/youtube.png'
						alt='youtube'
					/>
				</a>
				<a href='#' className='footer-contacts__link'>
					<img
						className='footer-contacts__img'
						src='/img/telegram.png'
						alt='telegram'
					/>
				</a>
			</div>
		</footer>
	)
}
