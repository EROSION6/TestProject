import { Img } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import s from './DontLose.module.scss'

export const DontLose = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='Don"t lose [Name], the link has changed!'
				description='Hi, the link to my page has changed. Add me to your contacts so you don"t lose touch with me'
			/>
			<Banner
				title='Pin a meeting with [Name]'
				logoDescription='Free Scheduling Assistant'
				link='New link - wellpin.io/artemzhikharev'
			/>
			<MyButton>Add to contacts</MyButton>
			<Footer />
		</div>
	)
}
