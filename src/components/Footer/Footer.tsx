import { Container, Img, Text } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import s from './Footer.module.scss'

export const Footer = () => {
	const footerStyle = {
		display: 'flex',
		flexDirection: 'column' as 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '22px',
	}

	const logoStyle = {
		width: '150px',
		height: '50px',
	}

	const text1Style = {
		color: 'rgb(157, 159, 163)',
		fontSize: '22px',
		fontWeight: 500,
		lineHeight: '120%',
		letterSpacing: '-4%',
		textAlign: 'left' as 'left',
		margin: '8px 0',
	}
	const text2Style = {
		color: 'rgb(157, 159, 163)',
		fontSize: '14px',
		fontWeight: 400,
		lineHeight: '24px',
		letterSpacing: '-2%',
		textAlign: 'left' as 'left',
	}
	return (
		<Container style={footerStyle}>
			<div className={s.content}>
				<Img src={logo} alt='Wellpin Logo' style={logoStyle} />
				<Text style={text1Style}>Free Scheduling Assistant</Text>
				<Text style={text2Style}>2024 © Wellpin. All rights reserved</Text>
			</div>
		</Container>
	)
}
