
import './adminOption.css'



export const AdminOption = () => {
	return (
		<div className='admin-option'>
			<div className='admin-option-timer'>
				<h4>Тариф PRO</h4>
				<p>У вас осталось 8 ч. 12 мин. аудио</p>
				<progress value={30} />
			</div>
			<div className='admin-option-chatgpt'>
				<img src='/public/img/Vector (2).svg' alt='' />
				<h4>ChatGPT</h4>
			</div>
		</div>
	)
}
