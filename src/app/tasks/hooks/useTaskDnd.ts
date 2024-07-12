import { useUpdateTask } from '@/app/tasks/hooks/useUpdateTask'
import { DropResult } from '@hello-pangea/dnd'
import { FILTERS } from '@/app/tasks/columns.data'

export function useTaskDnd() {
	const {updateTask} = useUpdateTask()

	const onDropEnd = (result: DropResult) => {
		if (!result?.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		if (destinationColumnId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			})

			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].format()
		updateTask({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		})
	}

	return {onDropEnd}
}