import { Text } from '@react-email/components'
import s from './Title.module.scss'

interface TitleProps {
	title: string
	descr: string
}

export const Title = ({ title, descr }: TitleProps) => {
	return (
		<div className={s.title}>
			<Text
				style={{
					color: 'rgb(33, 37, 41)',
					fontSize: '48px',
					fontWeight: 600,
					lineHeight: '100%',
					letterSpacing: '-4%',
					textAlign: 'left',
					marginBottom: '16px',
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					color: 'rgb(157, 159, 163)',
					fontSize: '22px',
					fontWeight: 500,
					lineHeight: '28px',
					textAlign: 'left',
				}}
			>
				{descr}
			</Text>
		</div>
	)
}
