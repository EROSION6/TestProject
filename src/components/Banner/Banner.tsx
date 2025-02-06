import { Container, Img, Section, Text } from '@react-email/components'
import logo2 from '../../assets/Logotype (2).svg'
import s from './Banner.module.scss'

interface BannerProps {
	title: string
	logoDescription: string
	link: string
}

export const Banner = ({ title, logoDescription, link }: BannerProps) => {
	const titleStyle = {
		color: 'rgb(255, 255, 255)',
		fontSize: '36px',
		fontWeight: 700,
		lineHeight: '120%',
		letterSpacing: '-5%',
		textAlign: ' left',
		margin: 0,
	}

	const descrStyle = {
		color: 'rgb(255, 255, 255)',
		fontSize: '18.4px',
		fontWeight: '500',
		lineHeight: '22px',
		letterSpacing: '-5%',
		textAlign: 'left',
		margin: 0,
	}

	return (
		<Container>
			<div className={s.banner}>
				<Section>
					<Text style={titleStyle}>{title}</Text>
					<div className={s.bottom}>
						<Img src={logo2} alt='Meeting with Артем Жихарев' />
						<Text style={descrStyle}>{logoDescription}</Text>
					</div>
				</Section>
				<div className={s.rightImage}>
					<Img
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
