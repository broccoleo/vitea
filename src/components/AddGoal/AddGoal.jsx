import { useState, useContext } from 'react'
import { GoalContext } from '../GoalContext'

const AddGoal = () => {
  const [goals, setGoals] = useContext(GoalContext)

  const currentMaxId = goals.reduce(
    (max, goal) => (goal.id > max ? goal.id : max),
    goals[0].id
  )

  const [newGoal, setNewGoal] = useState({
    id: currentMaxId + 1,
    name: '',
    time: '',
    timeSpent: 0,
    deadline: '',
    dateCompleted: '',
  })

  const [goalAdded, setGoalAdded] = useState(false)

  const setGoalValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewGoal({ ...newGoal, [name]: value })
  }

  const addGoal = (e) => {
    e.preventDefault()
    const goalToAdd = newGoal
    setGoals([...goals, goalToAdd])
    setNewGoal({
      id: currentMaxId + 2,
      name: '',
      time: '',
      timeSpent: 0,
      deadline: '',
      dateCompleted: '',
    })
    setGoalAdded(true)
  }

  return (
    <>
      <h2>add a new goal</h2>

      <div
        style={{ fontStyle: 'italic' }}
        className={goalAdded ? 'active-form' : 'hidden-form'}
      >
        Goal added!
      </div>

      <form>
        <div className='new-goal-form'>
          <label htmlFor='goal-name'>Goal description</label>
          <input
            type='text'
            id='name'
            name='name'
            value={newGoal.name}
            onChange={setGoalValue}
            placeholder='Give your goal a name'
          />
          <label htmlFor='goal-time'>Hours needed</label>
          <input
            type='text'
            id='time'
            name='time'
            value={newGoal.time}
            onChange={setGoalValue}
            placeholder='Number of hours needed'
          />

          <label htmlFor='goal-deadline'>Deadline</label>
          <input
            type='date'
            id='deadline'
            name='deadline'
            value={newGoal.deadline}
            onChange={setGoalValue}
          />
        </div>
        <button className='btn' onClick={addGoal}>
          add goal
        </button>
      </form>
    </>
  )
}

export default AddGoal
