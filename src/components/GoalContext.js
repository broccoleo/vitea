import { createContext, useState } from 'react'
import allGoals from '../data/allGoals'

export const GoalContext = createContext()

export const GoalProvider = (props) => {
  const [goals, setGoals] = useState(allGoals)

  return (
    <GoalContext.Provider value={[goals, setGoals]}>
      {props.children}
    </GoalContext.Provider>
  )
}
