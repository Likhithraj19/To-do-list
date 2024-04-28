import TaskSingle from "./TaskSingle"

const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
    <>
        {tasks.map((task) => (
            <TaskSingle key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks