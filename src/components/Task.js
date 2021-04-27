import Tooltip from '@material-ui/core/Tooltip'

const Task = ({ task, handleComplete, handleDelete }) => {
  return (
    <>
      <li className='task'>
        {task.task.goalName}, {task.task.goalTime} hours
        <Tooltip title='finished?'>
          <button
            value={task.task.goalName}
            // value={(task.task.goalName, task.task.goalTime)}
            onClick={handleComplete}
          >
            ✅
          </button>
        </Tooltip>
        <Tooltip title='delete task from plan'>
          <button value={task.task.goalName} onClick={handleDelete}>
            ❌
          </button>
        </Tooltip>
      </li>
    </>
  )
}

export default Task
