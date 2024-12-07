import { Link } from 'react-router-dom'
import './blogCard.css'

interface IBlogCard {
	id: number
	title: string
	description: string
	imgUrl: string
}

export const BlogCard = ({ title, id, description, imgUrl }: IBlogCard) => {
	return (
		<div className='blog-card'>
			<img src={imgUrl} alt='img' />
			<div className='blog-card-descr'>
				<h3>{title}</h3>
				<p>{`${description.substring(0, 150)}...`}</p>
				<div className='blog-card-descr-btn'>
					<Link to={`/${id}`}>
						<button>Советы</button>
					</Link>
					<Link to={`/${id}`}>
						<button>Новости</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
