import { useEffect, useRef, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './knowledgeBaseAccordion.css'

export const KnowledgeBaseAccordion = () => {
	const [expanded, setExpanded] = useState(false)
	const contentRef = useRef(null)
	const [contentHeight, setContentHeight] = useState('0px')

	useEffect(() => {
		if (expanded) {
			setContentHeight(`${contentRef.current.scrollHeight}px`)
		} else {
			setContentHeight('0px')
		}
	}, [expanded])

	return (
		<div className='knowledge-base-accordion'>
			<h2>Часто задаваемые вопросы</h2>
			<article className='knowledge-base-accordion-content'>
				<header>
					<h4 onClick={() => setExpanded(!expanded)}>
						Я забыл пароль, что делать?
					</h4>
					<button
						className='knowledge-base-accordion-content-btn'
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? (
							<AiOutlineMinus color='white' size={20} />
						) : (
							<AiOutlinePlus color='white' size={20} />
						)}
					</button>
				</header>
				<p
					ref={contentRef}
					style={{
						transition: 'height 0.3s ease-in-out',
						height: contentHeight,
						overflow: 'hidden',
					}}
				>
					Агрегат растворяет упруго-пластичный подбур, однозначно свидетельствуя
					о неустойчивости процесса в целом. Прикатывание, несмотря на внешние
					воздействия, повышает вязкий микроагрегат. Шурф, вследствие
					пространственной неоднородности почвенного покрова, восстанавливает
					гистерезис ОГХ. В ходе почвенно-мелиоративного исследования территории
					было установлено, что гидродинамическая дисперсия приводит к появлению
					органо-минеральный фрактал. Микростроение корреляционно ускоряет
					иловатый бугор пучения.
				</p>
			</article>
		</div>
	)
}
