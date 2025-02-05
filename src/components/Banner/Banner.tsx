import { Container, Section, Text } from '@react-email/components'
import logo2 from '../../assets/Logotype (2).svg'
import s from './Banner.module.scss'

interface BannerProps {
	title: string
	logoDescr: string
	link: string
}

export const Banner = ({ title, logoDescr, link }: BannerProps) => {
	const titleStyle = {
		color: 'rgb(255, 255, 255)',
		fontSize: '36px',
		fontWeight: 700,
		lineHeight: '120%',
		letterSpacing: '-5%',
		textAlign: ' left' as 'left',
		margin: 0,
	}

	const descrStyle = {
		color: 'rgb(255, 255, 255)',
		fontSize: '18.4px',
		fontWeight: '500',
		lineHeight: '22.08px',
		letterSpacing: '-5%',
		textAlign: 'left' as 'left',
		margin: 0,
	}

	return (
		<Container>
			<div className={s.banner}>
				<Section>
					<Text style={titleStyle}>{title}</Text>
					<div className={s.bottom}>
						<img src={logo2} alt='Meeting with Артем Жихарев' />
						<Text style={descrStyle}>{logoDescr}</Text>
					</div>
				</Section>
				<div className={s.rightImage}>
					<img
						src='/public/Rectangle 1.jpeg'
						alt='Meeting with Артем Жихарев'
					/>
				</div>
			</div>
			<div className={s.contLink}>
				<a href='wellpin.io/artemzhikharev' className={s.link}>
					{link}
				</a>
			</div>
		</Container>
	)
}
