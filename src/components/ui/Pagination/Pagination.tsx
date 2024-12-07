import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import './pagination.css'

interface IPagination {
	array: string[]
	active: number
	onClick: (value: number) => void
}

export const Pagination = ({ array, active, onClick }: IPagination) => {
	return (
		<div className='center'>
			<div className='pagination'>
				<a href='#' style={{ padding: '12px 13px' }}>
					<IoMdArrowRoundBack size={20} color='white' />
				</a>
				{array.map((page, index) => (
					<a
						href='#'
						key={page}
						className={active === index ? 'active-pagination' : ''}
						onClick={() => onClick(0)}
					>
						{page}
					</a>
				))}
				<a href='#' style={{ padding: '12px 13px' }}>
					<IoMdArrowRoundForward size={20} color='white' />
				</a>
			</div>
		</div>
	)
}
