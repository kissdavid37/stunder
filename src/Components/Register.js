import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

const registerAction = async (name, email, pass, gender, descript) => {
	try {
		const register = await instance.post('/register', {
			name: name,
			email: email,
			password: pass,
			gender: gender,
			description: descript,
		})
		const regtochat = await axios.post(
			'https://api.chatengine.io/users',
			{
				username: name,
				secret: pass,
				email: email,
			},
			{ headers: { 'PRIVATE-KEY': `${process.env.REACT_APP_PRIVATE_KEY}` } }
		)
		alert(`Sikeresen regisztráció a következő felhasználónévvel:${name}.\n Kérlek jelentkezz be!`)
		return register.data.register
	} catch (error) {
		alert(`Valami hiba történt!Próbáld újra`)
		console.log(error)
	}
}

const Register = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [gender, setGender] = useState('')
	const [description, setDescription] = useState('')

	const history = useNavigate()
	const createUser = async () => {
		registerAction(username, email, password, gender, description)
		history('/', { replace: true })
	}

	const [confirmPassword, setConfirmPassword] = useState('')

	return (
		<div className='login__outercontainer'>
			<div className='login__container'>
				<form className='loginForm '>
					<div className='userDetails'>
						<h1 className='log'>Stunder</h1>
						<div className='inputs'>
							<span className='details'>Felhasználónév</span>
							<input
								required='true'
								className='userinputs'
								type='text'
								placeholder='Felhasználónév'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className='inputs'>
							<span className='details'>E-Mail</span>
							<input
								className='userinputs'
								type='email'
								placeholder='E-mail'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='inputs'>
							<span className='details'>Jelszó</span>
							<input
								className='userinputs'
								type='password'
								placeholder='Jelszó'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className='inputs'>
							<span className='details'>
								Nem
								<br />
							</span>
							<select className='select' value={gender} onChange={(e) => setGender(e.target.value)}>
								<option></option>
								<option>Nő</option>
								<option>Férfi</option>
								<option>Titkos</option>
							</select>
						</div>
						<div className='inputs'>
							<span className='details'>Rövid leírás</span>
							<input
								className='userinputs'
								type='text'
								placeholder='Rövid leírás'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<p className='link' onClick={() => history('/', { replace: true })}>
							Már van fiókom.
						</p>
					</div>
					<div className='button'>
						<input type='button' onClick={createUser} value='Regisztrálok' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
