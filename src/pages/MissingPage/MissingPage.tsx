import { Img, Text } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import s from './MissingPage.module.scss'
import grade from '../../assets/grade.svg'

export const MissingPage = () => {

	return (
		<div className={s.missing}>
			<div className={s.missing_logoInfo}>
				<Img src={logo} alt='logo' className={s.logo} />
				<Title title='We miss you!' description='' />
				<div className={s.image}>
					<Img src='/public/Group 42 1.jpeg' alt='' />
					<Text>
						Hi [User's First Name]! It’s been a month since we last connected,
						and we’d love to hear from you! Your feedback is invaluable to us as
						we strive to improve our service
					</Text>
				</div>
			</div>
			<div className={s.missing_grade}>
				<h3>How would you rate our service on a 5 point scale?</h3>
				<Img src={grade} alt='grade' />
			</div>
			<div className={s.missing_bottom}>
				<h4>
					Ready to dive back in? Let's make your next call even more successful!
				</h4>
				<MyButton>Let’s go to wellpin!</MyButton>
				<Text>
					Need help with setup or questions about specific features? Reach out
					to support@wellpin.io — we’re happy to assist! Thank you for helping
					us grow and improve! The Wellpin Team
				</Text>
			</div>
			<Footer />
		</div>
	)
}
