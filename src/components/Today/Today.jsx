import { useState, useContext, useEffect } from 'react'
import TodayAgenda from '../TodayAgenda'
import { GoalContext } from '../GoalContext'
import { TaskContext } from '../TaskContext'

const Today = () => {
  const [goals, setGoals] = useContext(GoalContext)
  // const [tasks, setTasks] = useContext(TaskContext)

  const activeGoals = goals.filter((goal) => goal.time > goal.timeSpent)

  const [task, setTask] = useState({
    goalName: '',
    goalTime: '',
  })
  const [plan, setPlan] = useState([])

  const [formActive, setFormActive] = useState(false)
  const [taskAdded, setTaskAdded] = useState(false)
  const [unselectedGoals, setUnselectedGoals] = useState(activeGoals)

  useEffect(() => {
    setUnselectedGoals(
      unselectedGoals.filter((goal) => goal.name !== task.goalName)
    )
    setTask({ goalName: '', goalTime: '' })
  }, [plan])

  const setTaskValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    setTask({ ...task, [name]: value })
  }

  const addTaskToPlan = (e) => {
    e.preventDefault()
    const newTask = { task }

    setPlan([...plan, newTask])
    // setTask({ goalName: '', goalTime: '' })
    setTaskAdded(true)
  }

  const createTodayPlan = (e) => {
    setPlan(plan)
    // setTasks(tasks)
    e.preventDefault()
    setFormActive(!formActive)
  }

  const returnToAddTaskForm = (e) => {
    e.preventDefault()
    setFormActive(!formActive)
    setTaskAdded(false)
  }
  return (
    <>
      <div className={`create-plan-form`}>
        <h2>today's plan for success</h2>
        <div
          className={`create-plan-form ${
            formActive ? 'hidden-form' : 'active-form'
          }`}
        >
          <p>
            Choose the goals you want to work on today. After you've added
            everything just press done and you're good to go!
          </p>
          <div
            className={taskAdded ? 'active-form' : 'hidden-form'}
            style={{ fontStyle: 'italic' }}
          >
            Added to today's plan!
          </div>
          <form>
            <label htmlFor='goalName'>Select a goal</label>
            <select
              name='goalName'
              id='goalName'
              value={task.goalName}
              onChange={setTaskValue}
              required='required'
            >
              <option></option>
              {unselectedGoals.map((goal) => {
                return <option value={goal.name}>{goal.name}</option>
              })}
            </select>
            <label htmlFor='goalTime'>
              How much time will you spend on it?
            </label>
            <input
              type='number'
              id='goalTime'
              name='goalTime'
              value={task.goalTime}
              onChange={setTaskValue}
              required='required'
            />
            <button className='btn' type='submit' onClick={addTaskToPlan}>
              add to today's plan
            </button>
            <button
              onClick={createTodayPlan}
              className='btn'
              style={{ marginLeft: '10px' }}
            >
              done
            </button>
          </form>
        </div>
      </div>
      <div className={formActive ? 'active-form' : 'hidden-form'}>
        <TodayAgenda
          tasks={plan}
          setTasks={setPlan}
          addNewTask={addTaskToPlan}
          unselectedGoals={unselectedGoals}
          setUnselectedGoals={setUnselectedGoals}
        />
        <button className='btn' type='submit' onClick={returnToAddTaskForm}>
          add more tasks
        </button>
      </div>
    </>
  )
}

export default Today
