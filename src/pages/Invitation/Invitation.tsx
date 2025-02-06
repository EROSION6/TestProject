import { Img } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import { Links } from '../../components/Links/Links'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import { welcomeLinks } from '../../constant/data'
import s from './Invitation.module.scss'

export const Invitation = () => {
	return (
		<div className={s.invitation}>
			<div className={s.invitation_logoInfo}>
				<Img src={logo} alt='logo' className={s.logo} />
				<Title
					title='[Name] invites you to Wellpin!'
					description='Hi, I"m [name] and I"m inviting you to Wellpin to check my availability and book calls with me easily through this link'
				/>
			</div>
			<Banner
				title='Pin a meeting with [Name]'
				logoDescription='Free Scheduling Assistant'
				link='wellpin.io/artemzhikharev'
			/>
			<Links title='With Wellpin you can' links={welcomeLinks} />
			<MyButton>Accept the invitation</MyButton>
			<Footer />
		</div>
	)
}
