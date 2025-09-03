import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'

export function Tips() {
	const { state } = useTaskContext()
	const nextCycle = getNextCycle(state.currentCycle)
	const nextCycleType = getNextCycleType(nextCycle)

	const tipsForWhenActiveTask = {
		workTime: (
			<span>Fique <b>em foco</b></span>
		),
		shortBreakTime: (
			<span><b>Descanse</b></span>
		),
		longBreakTime: (
			<span><b>Descanse</b></span>
		)
	}

	const tipsForNoActiveTask = {
		workTime: (
			<span>Nesse ciclo <b>foque</b> por <b>{state.config.workTime} min</b></span>
		),
		shortBreakTime: (
			<span>Nesse ciclo <b>descanse</b> por <b>{state.config.shortBreakTime} min</b></span>
		),
		longBreakTime: (
			<span>Nesse ciclo <b>descanse</b> por <b>{state.config.longBreakTime} min</b></span>
		)
	}
	return(
		<>
			{!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
			{!state.activeTask && tipsForNoActiveTask[nextCycleType]}
		</>
	)
}