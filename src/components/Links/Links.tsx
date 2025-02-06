import { Container, Text } from '@react-email/components'
import s from './Links.module.scss'

export type ILink = {
	title: string
	descr: string
}

interface LinkProps {
	title: string
	links?: ILink[]
}

export const Links = ({ title, links = [] }: LinkProps) => {
	const containerStyle = {
		padding: '20px',
		backgroundColor: 'rgb(255, 255, 255)',
	}


	const titleStyle = {
		color: 'rgb(0, 0, 0)',
		fontSize: '36px',
		fontWeight: 600,
		lineHeight: '140%',
		letterSpacing: ' -2%',
		marginBottom: '32px',
	}


	const linkTitleStyle = {
		color: 'rgb(0, 0, 0)',
		fontSize: '24px',
		fontWeight: 600,
		lineHeight: '150%',
		letterSpacing: ' -2%',
		margin: 0,
	}


	const linkDescrStyle = {
		color: 'rgb(157, 159, 163)',
		fontSize: '22px',
		fontWeight: 400,
		lineHeight: '140%',
		letterSpacing: ' -2%',
		marginTop: '8px',
	}


	const titleStylePhone = {
		...titleStyle,
		fontSize: '20px',
		lineHeight: '140%',
		marginBottom: '16px',
	}


	const linkDescrStylePhone = {
		...linkDescrStyle,
		fontSize: '14px',
	}


	const linkTitleStylePhone = {
		...linkTitleStyle,
		fontSize: '16px',
		lineHeight: '18px',
	}

	
	return (
		<Container style={containerStyle}>
			<Text style={window.innerWidth < 768 ? titleStylePhone : titleStyle}>
				{title}
			</Text>
			<div className={s.col}>
				{links.map((link, i) => (
					<Container key={i}>
						<Text
							style={
								window.innerWidth < 768 ? linkTitleStylePhone : linkTitleStyle
							}
						>
							{link.title}
						</Text>
						<Text
							style={
								window.innerWidth < 768 ? linkDescrStylePhone : linkDescrStyle
							}
						>
							{link.descr}
						</Text>
					</Container>
				))}
			</div>
		</Container>
	)
}
