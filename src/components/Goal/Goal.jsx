import ProgressBar from '../ProgressBar'

const Goal = ({ goal }) => {
  const progress = goal.timeSpent / goal.time
  const progressMessage = (totalTime, timeSpent, dateCompleted) => {
    if (totalTime === timeSpent) {
      return `You completed this goal on ${dateCompleted}`
    } else {
      return `${totalTime - timeSpent} hours to finish`
    }
  }

  return (
    <>
      <li>{goal.name}</li>
      <li className='time-to-finish'>
        {progressMessage(goal.time, goal.timeSpent, goal.dateCompleted)}
      </li>
      {progress < 1 && <ProgressBar progress={progress * 100} />}
    </>
  )
}

export default Goal
