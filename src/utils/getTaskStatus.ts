import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel, activetask: TaskModel | null) {
	if (task.completeDate) return 'Completa'
	if (task.interruptDate) return 'Interrompida'
	if (task.id === activetask?.id) return 'Em Progresso'
	return 'Abandonada'
}