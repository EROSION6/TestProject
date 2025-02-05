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
	return (
		<div
			className={s.column}
			style={{
				flexDirection: reverse ? 'row-reverse' : 'row',
			}}
		>
			<div className={s.column_left}>
				<h4>{col1.title}</h4>
				<p>{col1.descr}</p>
			</div>
			<div className={s.column_right}>
				<img src={col2} alt='' />
			</div>
		</div>
	)
}
