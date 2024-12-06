import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../config/auth/auth'
import './style.css'

export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigation = useNavigate()

	const handleLoginAccount: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault()
		if (email !== '' || password !== '') {
			signInWithEmailAndPassword(getAuth(app), email, password)
				.then(user => {
					console.log('User signed in successfully:', user.user)
					return navigation('/')
				})
				.catch(error => {
					console.error('Error login user:', error)
					alert('Ошибка при авторизации. Проверьте введенные данные.')
					setEmail('')
					setPassword('')
				})
		}
	}
	return (
		<div className='login-container'>
			<form className='registration-form'>
				<div className='login-image'>
					<img src='./img/logo-black.png' alt='' />
				</div>
				<h1 className='login-title'>Войти</h1>
				<div className='login-block'>
					<label className='login-label' htmlFor='email'>
						Электронная почта
					</label>
					<input
						className='login-input'
						type='email'
						id='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='konstantinopolski.k@gmail.com'
						required
					/>
				</div>
				<div className='login-block'>
					<label className='login-label' htmlFor='password'>
						Пароль
					</label>
					<input
						className='login-input'
						type='password'
						id='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='* * * * * *'
						required
					/>
				</div>

				<div className='login-block'>
					<button className='login-submit' onClick={handleLoginAccount}>
						Войти
					</button>
				</div>
				<p className='login-link'>
					Нет аккаунта? <Link to='/register'>Зарегестрироваться</Link>
				</p>

				<div className='social-login'>
					<button className='google'>
						<img src='./img/Google.png' alt='#' /> Войти через Google
					</button>
					<button className='vk'>
						<img src='./img/VK(1).png' alt='#' /> Войти через VK
					</button>
					<button className='facebook'>
						<img src='./img/Facebook.png' alt='#' /> Войти через Facebook
					</button>
				</div>
			</form>
		</div>
	)
}
