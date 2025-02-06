import { Img } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import s from './AddName.module.scss'

export const AddName = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='Add [Name] to your contacts'
				description='		Add [Name] to your contacts to see his available slots and book
					meetings quickly and easily'
			/>
			<Banner
				title='Pin a meeting with [Name]'
				logoDescription='Free Scheduling Assistant'
				link='wellpin.io/artemzhikharev'
			/>
			<MyButton>Add to contacts</MyButton>
			<Footer />
		</div>
	)
}
