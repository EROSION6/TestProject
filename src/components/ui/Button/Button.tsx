import { Button, Img } from '@react-email/components'
import React from 'react'
import pin from '../../../assets/pin.svg'
import s from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
}

export const MyButton = ({ children }: ButtonProps) => {
	const buttonStyle = {
		width: '100%',
		backgroundColor: 'rgb(13, 110, 253)',
		color: '#ffffff',
		padding: '26px',
		border: 'none',
		borderRadius: '27px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textDecoration: 'none',
	}


	const spanStyle = {
		color: 'rgb(255, 255, 255)',
		fontFamily: 'Inter, sans-serif',
		fontSize: '27px',
		fontWeight: 600,
		lineHeight: '40.03px',
		letterSpacing: '-2%',
	}

	
	const imgStyle = {
		width: '26px',
		height: '26px',
	}
	return (
		<Button style={buttonStyle}>
			<div className={s.btn}>
				<span style={spanStyle}>{children}</span>
				<Img src={pin} alt='' style={imgStyle} />
			</div>
		</Button>
	)
}
