import { Img, Text } from '@react-email/components'
import grade from '../../assets/grade.svg'
import logo from '../../assets/Logotype (1).svg'
import { Column } from '../../components/Column/Column'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import { firstLookRefinerCol } from '../../constant/data'

import s from './FirstMeetFeedback.module.scss'

export const FirstMeetFeedback = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='How was your first meet?'
				description='Hi [User"s First Name]! Share feedback about your firsh call using wellpin'
			/>

			<div className={s.grade}>
				<h3>How would you rate our service on a 5 point scale?</h3>
				<Img src={grade} alt='grade' />
			</div>

			<div className={s.column}>
				<h2>Must-try features to enhance your experience</h2>
				{firstLookRefinerCol.map((data, index) => (
					<Column
						key={index}
						reverse={data.reverse}
						col1={data.col1}
						col2={data.col2}
					/>
				))}
			</div>

			<div className={s.overlapEliminator}>
				<MyButton>Explore Wellpin now!</MyButton>
				<Text>
					Need help with setup or questions about specific features? Reach out
					to support@wellpin.io — we’re happy to assist!
					<br />
					Thank you for helping us grow and improve! The Wellpin Team
				</Text>
			</div>
			<Footer />
		</div>
	)
}
