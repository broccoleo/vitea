import { useEffect, useContext, useState } from 'react'
import Task from '../Task'
import { GoalContext } from '../GoalContext'

const TodayAgenda = ({
  tasks,
  setTasks,
  unselectedGoals,
  setUnselectedGoals,
}) => {
  const [goals, setGoals] = useContext(GoalContext)

  // const [returnGoal, setReturnGoal] = useState([{ name: '' }])

  const handleComplete = (e) => {
    e.preventDefault()
    let result = goals.filter((goal) => {
      return goal.name === e.target.value
    })
    let resultId = result[0].id
    // setGoals((goals[resultId].timeSpent = goals[resultId].timeSpent + 2))
    goals[resultId].timeSpent = goals[resultId].timeSpent + 2
  }

  const handleDelete = (e) => {
    e.preventDefault()
    // setReturnGoal((returnGoal.name = e.target.value))
    setTasks(tasks.filter((tasks) => tasks.task.goalName !== e.target.value))
    // setUnselectedGoals(...unselectedGoals, returnGoal)
    // setReturnGoal((name = ''))
  }

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        These are the goals you set for yourself for today. You can add more
        tasks at any point if you're feeling particularly ambitious-- and
        remember
      </div>
      {/* {tasksToDo && (
        <ul className='task-list'>
          {tasksToDo.map((task) => (
            <Task
              task={task}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )} */}

      {tasks && (
        <ul className='task-list'>
          {tasks.map((task) => (
            <Task
              task={task}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default TodayAgenda
