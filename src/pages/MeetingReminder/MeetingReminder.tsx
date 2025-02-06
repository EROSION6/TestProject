import { Img, Text } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Column } from '../../components/Column/Column'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import { meetingReminderCol } from '../../constant/data'

import s from './MeetingReminder.module.scss'

export const MeetingReminder = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='Never miss a meeting again! '
				description=' Set up your slots to receive meetings exactly when you want'
			/>

			<div className={s.column}>
				{meetingReminderCol.map((data, index) => (
					<Column
						key={index}
						reverse={data.reverse}
						col1={data.col1}
						col2={data.col2}
					/>
				))}
			</div>

			<div className={s.overlapEliminator}>
				<MyButton>Setup slots now</MyButton>
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
