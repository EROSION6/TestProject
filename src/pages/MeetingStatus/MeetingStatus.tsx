import logo from '../../assets/Logotype (1).svg'
import { Footer } from '../../components/Footer/Footer'
import { Links } from '../../components/Links/Links'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import { meetingLinks } from '../../constant/data'
import s from './MeetingStatus.module.scss'

export const MeetingStatus = () => {
	return (
		<div className={s.meeting}>
			<div className={s.meeting_logoInfo}>
				<img src={logo} alt='logo' className={s.logo} />
				<Title
					title='Be ready for the meeting'
					descr='Collect information from meeting participants to better prepare for each meeting and provide a personalised experience'
				/>
				<img src='/public/Group 42 1.jpeg' alt='' className={s.image} />
			</div>

			<Links title='2 simple steps to set up' links={meetingLinks} />

			<div className={s.meeting_bottom}>
				<MyButton>Set up fields</MyButton>

				<p>
					Need help with setup or questions about specific features? Reach out
					to support@wellpin.io — we’re happy to assist! Thank you for helping
					us grow and improve! The Wellpin Team
				</p>
			</div>
			<Footer />
		</div>
	)
}
