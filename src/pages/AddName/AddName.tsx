import logo from '../../assets/Logotype (1).svg'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import { MyButton } from '../../components/ui/Button/Button'
import s from './AddName.module.scss'

export const AddName = () => {
	return (
		<div className={s.container}>
			<img src={logo} alt='logo' className={s.logo} />
			<div className={s.title}>
				<h2>Add [Name] to your contacts</h2>
				<p>
					Add [Name] to your contacts to see his available slots and book
					meetings quickly and easily
				</p>
			</div>
			<Banner
				title='Pin a meeting with [Name]'
				logoDescr='Free Scheduling Assistant'
				link='wellpin.io/artemzhikharev'
			/>
			<MyButton>Add to contacts</MyButton>
			<Footer />
		</div>
	)
}
