import { Img } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import s from './MissedPage.module.scss'

export const MissedPage = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='Looks like you"ve been missed'
				description='Hey [User"s First Name], you haven"t had a meeting in a while, it"s time to remind yourself'
			/>
			<Banner
				title='You have [XX] contacts'
				logoDescription='Free Scheduling Assistant'
				link='[Contact1], [Contact2], [Contact3], [Contact4], [Contact5]'
			/>
			<MyButton>Share your link</MyButton>
			<Footer />
		</div>
	)
}
