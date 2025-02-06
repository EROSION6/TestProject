import { Img, Text } from '@react-email/components'
import s from './Column.module.scss'

export type ICol1 = {
	title: string
	descr: string
}

interface ColumnProps {
	col1: ICol1
	col2: string
	reverse: boolean
}

export const Column = ({ col1, col2, reverse }: ColumnProps) => {

	
	const titleStyle = {
		color: 'rgb(33, 37, 41)',
		fontSize: '20px',
		fontWeight: 700,
		lineHeight: '24px',
		letterSpacing: '-2%',
		textAlign: ' left',
		margin: 0,
	}


	const descrStyle = {
		color: 'rgb(157, 159, 163)',
		fontSize: '14px',
		fontWeight: 400,
		lineHeight: '20px',
		letterSpacing: '0%',
		textAlign: ' left',
		margin: 0,
	}

	return (
		<div
			className={s.column}
			style={{
				flexDirection: reverse ? 'row-reverse' : 'row',
			}}
		>
			<div className={s.column_left}>
				<Text style={titleStyle}>{col1.title}</Text>
				<Text style={descrStyle}>{col1.descr}</Text>
			</div>
			<div className={s.column_right}>
				<Img src={col2} alt={col1.title} />
			</div>
		</div>
	)
}
