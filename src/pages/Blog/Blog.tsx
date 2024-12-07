import { BlogSection } from '../../components/BlogSection/BlogSection'
import './blog.css'

export const Blog = () => {
	return (
		<div className='blog'>
			<div className='blog-content'>
				<h2>Блог</h2>
				<BlogSection />
			</div>
		</div>
	)
}
