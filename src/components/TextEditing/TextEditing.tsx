export const TextEditing = () => {
	return (
		<div className='main-functions-content-block-content'>
			<div className='main-functions-content-block-content-block'>
				<h4 className='main-functions-content-block-content-block__title'>
					Обработка полученного текста от вас:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Перевод с 40+ языков на заданный вами. Правка грамматических и
					стилистических ошибок.
				</p>
				<div className='main-functions-content-block-content-block-add gap_20px'>
					<span className='main-functions-content-block-content-block-add__item delete_before delete_padding'>
						<img src='./img/russiaFlag.png' className='item_img' alt='Russia' />
					</span>
					<span className='main-functions-content-block-content-block-add__item delete_before delete_padding'>
						<img
							src='./img/Germany (DE).png'
							className='item_img'
							alt='Germany'
						/>
					</span>
					<span className='main-functions-content-block-content-block-add__item delete_before delete_padding'>
						<img
							src='./img/France (FR).png'
							className='item_img'
							alt='France'
						/>
					</span>
					<span className='main-functions-content-block-content-block-add__item delete_before delete_padding'>
						<img
							src='./img/United States of America (US).png'
							className='item_img'
							alt='USA'
						/>
					</span>
					<span className='main-functions-content-block-content-block-add__item delete_before delete_padding'>
						<img
							src='./img/Sweden (SE).png'
							className='item_img'
							alt='Sweden'
						/>
					</span>
					<span className='main-functions-content-block-content-block-add__item delete_before delete_padding flags_text'>
						36+
					</span>
				</div>
			</div>
			<div className='main-functions-content-block-content-block'>
				<h4 className='main-functions-content-block-content-block__title'>
					Персонализация
					<br />
					вывода:
				</h4>
				<p className='main-functions-content-block-content-block__descr'>
					Возможность адаптировать стиль текста под конкретные нужды
					пользователя, например:
				</p>
				<div className='main-functions-content-block-content-block-add new_flex'>
					<span className='flags_concrete add_border'>Формальный</span>
					<span className='flags_concrete add_border'>Неформальный</span>
					<span className='flags_concrete add_border'>Академический</span>
					<span className='flags_concrete add_border'>Научный</span>
				</div>
			</div>
		</div>
	)
}
