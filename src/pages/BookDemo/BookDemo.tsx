import { Img, Text } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Column } from '../../components/Column/Column'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import s from './BookDemo.module.scss'

export const BookDemo = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='Stop losing leads!'
				description='Get a FREE ‘Book a demo’ widget that you can put on your website in 1 minute without coding'
			/>
			<div className={s.image}>
				<Img src='/public/Photo.jpeg' alt='' />
			</div>

			<div className={s.column}>
				<h2>2 simple steps to set up</h2>
				<Column
					reverse={false}
					col1={{
						title: 'Integrate a widget 🚀',
						descr:
							'Integrate a widget right into your website and watch your leads multiply!',
					}}
					col2='/public/Group 42 1.jpeg'
				/>
				<Column
					reverse={true}
					col1={{
						title: 'Customize your booking form 🎨',
						descr:
							'Add your own fields to the booking form for the info that matters most to you',
					}}
					col2='/public/Group 42 1.jpeg'
				/>
			</div>

			<div className={s.bookDemo}>
				<MyButton>Set up fields</MyButton>
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
