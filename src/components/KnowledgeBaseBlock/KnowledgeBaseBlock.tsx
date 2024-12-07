import { Link } from 'react-router-dom'
import './knowledgeBaseBlock.css'

interface IKnowledgeBaseBlock {
	id: number
	title: string
	links?: string[]
}

export const KnowledgeBaseBlock = ({
	id,
	title,
	links = [],
}: IKnowledgeBaseBlock) => {
	return (
		<div className='knowledge-base-block'>
			<b>{title}</b>
			<ul>
				{links.map((link, index) => (
					<li key={index}>{link}</li>
				))}
			</ul>
			<Link to={`/knowledgeBase/${id}`}>Больше</Link>
		</div>
	)
}
