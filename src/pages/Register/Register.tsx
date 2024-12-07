import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../config/auth/auth'
import './style.css'

export const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const navigation = useNavigate()

	const handleCreateAccount: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault()
		if (email !== '' || password !== '' || confirmPassword !== '') {
			createUserWithEmailAndPassword(getAuth(app), email, password)
				.then(user => {
					console.log('User signed in successfully:', user.user)
					return navigation('/login')
				})
				.catch(error => {
					console.error('Error creating user:', error)
					alert('Ошибка регистрации. Проверьте введенные данные.')
					setEmail('')
					setPassword('')
					setConfirmPassword('')
				})
		}
	}

	return (
		<div className='login-container'>
			<form className='registration-form'>
				<div className='login-image'>
					<img src='./img/logo-black.png' alt='' />
				</div>
				<h1 className='login-title'>Регистрация</h1>
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
					<label className='login-label' htmlFor='confirm-password'>
						Пароль еще раз
					</label>
					<input
						className='login-input'
						type='password'
						id='confirm-password'
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						placeholder='* * * * * *'
						required
					/>
					<span className='error-message' id='error-message'>
						Пароли не совпадают
					</span>
				</div>

				<div className='login-block'>
					<button className='login-submit' onClick={handleCreateAccount}>
						Зарегистрироваться
					</button>
				</div>
				<p className='login-link'>
					Есть аккаунт? <Link to='/login'>Войти</Link>
				</p>
			</form>
		</div>
	)
}
