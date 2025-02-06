import { Img, Text } from '@react-email/components'
import logo from '../../assets/Logotype (1).svg'
import { Column } from '../../components/Column/Column'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import { overlapEliminatordCol } from '../../constant/data'

import s from './OverlapEliminator.module.scss'

export const OverlapEliminator = () => {
	return (
		<div className={s.container}>
			<Img src={logo} alt='logo' className={s.logo} />
			<Title
				title='No more overlaps!'
				description='Schedule meetings with Welpin: sync your calendar, select a slot, and we"ll take care of the rest'
			/>
			<div className={s.column}>
				{overlapEliminatordCol.map((data, index) => (
					<Column
						key={index}
						reverse={data.reverse}
						col1={data.col1}
						col2={data.col2}
					/>
				))}
			</div>
			<div className={s.overlapEliminator}>
				<MyButton>Pin a meeting</MyButton>
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
