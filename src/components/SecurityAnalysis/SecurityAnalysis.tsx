export const SecurityAnalysis = () => {
	return (
		<div className='main-functions-content-block-content'>
			<div className='main-functions-content-block-content-block'>
				<h4 className='main-functions-content-block-content-block__title'>
					Защита данных:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Все данные звонков хранятся в зашифрованном виде на наших серверах или
					на серверах вашей компании и не передаются третьим лицам, сервисам,
					компаниям.
				</p>
				<img src='./img/shield.png' className='magicHat' alt='#' />
			</div>
			<div className='main-functions-content-block-content-block pos_rel min-height408px'>
				<h4 className='main-functions-content-block-content-block__title'>
					Соответствие нормативам:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Соответствие международным стандартам защиты данных, включая GDPR, для
					обеспечения максимальной безопасности информации.
				</p>
				<img src='./img/document.png' className='magicHat' alt='Document' />
			</div>
		</div>
	)
}
