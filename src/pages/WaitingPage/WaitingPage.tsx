import logo from '../../assets/Logotype (1).svg'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import s from './WaitingPage.module.scss'

export const WaitingPage = () => {
	return (
		<div className={s.container}>
			<img src={logo} alt='logo' className={s.logo} />
			<Title
				title='They"re waiting for you!'
				descr='Hey [User"s First Name], we’ve streamlined everything! Now you can reach all your contacts instantly—no more searching around!'
			/>
			<Banner
				title='You have [XX] contacts'
				logoDescr='Free Scheduling Assistant'
				link='[Contact1], [Contact2], [Contact3], [Contact4], [Contact5]'
			/>
			<MyButton>See all contacts</MyButton>
			<Footer />
		</div>
	)
}
