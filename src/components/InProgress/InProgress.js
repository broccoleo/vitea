import React, { useContext } from 'react'
import Goal from '../Goal'
import { GoalContext } from '../GoalContext'

const InProgress = () => {
  const [goals, setGoals] = useContext(GoalContext)
  const goalsInProgress = goals.filter((goal) => goal.time > goal.timeSpent)
  return (
    <>
      <h2>manage your goals</h2>
      <div>
        All your active goals in one place. You can filter and sort your goals
        into buckets by nature or difficulty, update deadlines or amount of time
        needed, and delete any goals.
        <br />
        <br />
        To see the goals you have already completed, check out the Achievements
        page.
      </div>
      <h2>in progress</h2>
      <ul className='list'>
        {goalsInProgress.map((goal) => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </ul>
    </>
  )
}

export default InProgress
