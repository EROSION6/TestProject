import logo from '../../assets/Logotype (1).svg'
import { Column } from '../../components/Column/Column'
import { Footer } from '../../components/Footer/Footer'
import { Title } from '../../components/Title/Title'
import { MyButton } from '../../components/ui/Button/Button'
import { firstLookRefinerCol } from '../../constant/data'

import s from './FirstLookRefiner.module.scss'

export const FirstLookRefiner = () => {
	return (
		<div className={s.container}>
			<img src={logo} alt='logo' className={s.logo} />
			<Title
				title='Perfect your first Impression!'
				descr='Transform your meeting scheduler page into a memorable digital handshake'
			/>

			<div className={s.column}>
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
				<MyButton>Set up now!</MyButton>
				<p>
					Need help with setup or questions about specific features? Reach out
					to support@wellpin.io — we’re happy to assist!
					<br />
					Thank you for helping us grow and improve! The Wellpin Team
				</p>
			</div>
			<Footer />
		</div>
	)
}
