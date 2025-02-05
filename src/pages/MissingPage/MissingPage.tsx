import logo from '../../assets/Logotype (1).svg'
import { Footer } from '../../components/Footer/Footer'
import { MyButton } from '../../components/ui/Button/Button'
import s from './MissingPage.module.scss'

export const MissingPage = () => {
	return (
		<div className={s.missing}>
			<div className={s.missing_logoInfo}>
				<img src={logo} alt='logo' className={s.logo} />
				<div className={s.title}>
					<h2>We miss you!</h2>
				</div>

				<div className={s.image}>
					<img src='/public/Group 42 1.jpeg' alt='' />
					<p>
						Hi [User's First Name]! It’s been a month since we last connected,
						and we’d love to hear from you! Your feedback is invaluable to us as
						we strive to improve our service
					</p>
				</div>
			</div>

			{/* grade */}
			<div className={s.missing_grade}>
				<h3>How would you rate our service on a 5 point scale?</h3>
				<img src='/public/Frame 2131329339.jpeg' alt='' />
			</div>

			<div className={s.missing_bottom}>
				<h4>
					Ready to dive back in? Let's make your next call even more successful!
				</h4>
				<MyButton>Let’s go to wellpin!</MyButton>

				<p>
					Need help with setup or questions about specific features? Reach out
					to support@wellpin.io — we’re happy to assist! Thank you for helping
					us grow and improve! The Wellpin Team
				</p>
			</div>

			{/* footer */}
			<Footer />
		</div>
	)
}
