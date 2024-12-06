export const UserCabinet = () => {
	return (
		<div id='LK' className='main-functions-content-block'>
			<div className='main-functions-content-block-wrapper'>
				<h3 className='main-functions-content__title'>
					Личный
					<br />
					кабинет пользователя
				</h3>
				<p className='main-functions-content__descr'>
					Для эффективного управления результатами транскрибации,платформа
					предоставляет личный кабинет для удобного хранения и работы с
					обработанным материалом:
				</p>
			</div>
			<div className='main-functions-content-block-items'>
				<div className='main-functions-content-block-items-title-block min-height408px width'>
					<h2 className='main-functions-content-block-items-title-block__title'>
						Хранение результатов транскрибации
					</h2>
				</div>
				<div className='main-functions-content-block-items-content-block min-height408px width'>
					<h4 className='main-functions-content-block-content-block__title'>
						Архивация файлов:{' '}
					</h4>
					<p className='main-functions-content-block-content-block__descr'>
						Пользователи могут сохранять все результаты транскрибированных файлы
						в своём аккаунте. Это удобно для истории работ и доступа в любое
						время.
					</p>
					<img
						src='./img/save.png'
						className='item-content-block__img'
						alt='#'
					/>
				</div>
				<div className='main-functions-content-block-items-content-block min-height408px width'>
					<h4 className='main-functions-content-block-content-block__title'>
						Папки и категоризация:{' '}
					</h4>
					<p className='main-functions-content-block-content-block__descr'>
						Возможность создания папок для организации файлов по проектам,
						датам, темам или любым другим критериям.
					</p>
					<img
						src='./img/files.png'
						className='item-content-block__img'
						alt='#'
					/>
				</div>
				<div className='main-functions-content-block-items-content-block min-height408px width'>
					<h4 className='main-functions-content-block-content-block__title'>
						Поиск по текстам:
					</h4>
					<p className='main-functions-content-block-content-block__descr'>
						Функция поиска позволяет находить нужные документы по ключевым
						словам в транскрибированном тексте.
					</p>
					<img
						src='./img/search.png'
						className='item-content-block__img'
						alt='#'
					/>
				</div>
			</div>
			<div className='main-functions-content-block-items'>
				<div className='main-functions-content-block-items-title-block min-height408px width'>
					<h2 className='main-functions-content-block-items-title-block__title'>
						Редактирование и обработка текста
					</h2>
				</div>
				<div className='main-functions-content-block-items-content-block min-height408px width'>
					<h4 className='main-functions-content-block-content-block__title'>
						Редактор текста:
					</h4>
					<p className='main-functions-content-block-content-block__descr'>
						Интегрированный текстовый редактор для коррекции и форматирования
						транскрибированных документов.
					</p>
					<img
						src='./img/redactor.png'
						className='item-content-block__img'
						alt='#'
					/>
				</div>
				<div className='main-functions-content-block-items-content-block min-height408px width'>
					<h4 className='main-functions-content-block-content-block__title'>
						Шаблоны документов:{' '}
					</h4>
					<p className='main-functions-content-block-content-block__descr'>
						Возможность использовать предустановленные или создавать собственные
						шаблоны для различных типов материалов.
					</p>
					<img
						src='./img/documentForm.png'
						className='item-content-block__img'
						alt='#'
					/>
				</div>
				<div className='main-functions-content-block-items-content-block min-height408px width'>
					<h4 className='main-functions-content-block-content-block__title'>
						Экспорт результатов:{' '}
					</h4>
					<p className='main-functions-content-block-content-block__descr'>
						Функция экспорта транскрибированных текстов в различные форматы,
						включая PDF, DOCX, TXT и другие.
					</p>
					<img
						src='./img/export.png'
						className='item-content-block__img'
						alt='#'
					/>
				</div>
			</div>
		</div>
	)
}
