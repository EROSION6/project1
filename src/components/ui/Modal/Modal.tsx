import { IoMdClose } from 'react-icons/io'
import './modal.css'

interface IModal {
	children: React.ReactNode
	onClose?: ((value: boolean) => void) | undefined
	style?: React.CSSProperties
	classNames?: string
}

export const Modal = ({ children, onClose, style, classNames }: IModal) => {
	return (
		<div className='modal' style={style}>
			<div className={`modal-content ${classNames}`}>
				<button
					className='modal-content-close'
					onClick={() => {
						if (onClose) onClose(false)
					}}
				>
					<IoMdClose size={24} />
				</button>
				{children}
			</div>
		</div>
	)
}
