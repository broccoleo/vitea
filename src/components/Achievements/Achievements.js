import React, { useContext } from 'react'
import AddGoal from '../AddGoal/AddGoal'
import Goal from '../Goal'
import { GoalContext } from '../GoalContext'

const Achievements = () => {
  const [goals, setGoals] = useContext(GoalContext)
  const completedGoals = goals.filter((goal) => goal.timeSpent === goal.time)

  return (
    <>
      <h2>achievements</h2>
      <p>
        Look how far you've come - these are all the goals you have achieved
        since opening an account!
        <br />
        <br />
      </p>

      <div>
        <ul className='list'>
          {' '}
          {completedGoals.map((goal) => (
            <Goal key={goal.id} goal={goal} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Achievements
