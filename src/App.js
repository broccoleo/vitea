import './App.css'
import Navbar from './components/Navbar'
import Proverb from './components/Proverb'
import Today from './components/Today'
import InProgress from './components/InProgress'
import Achievements from './components/Achievements'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GoalProvider } from './components/GoalContext'
import AddGoal from './components/AddGoal/AddGoal'

function App() {
  return (
    <>
      <GoalProvider>
        <Router>
          <div className='navbar'>
            <Navbar />
          </div>
          <Proverb />

          <Switch>
            <div className='container'>
              <Route path='/' exact component={Today} />
              <Route path='/today' exact component={Today} />
              <Route path='/mytasks' component={InProgress} />
              <Route path='/achievements' component={Achievements} />
              <Route path='/add' component={AddGoal} />
            </div>
          </Switch>
        </Router>
      </GoalProvider>
    </>
  )
}

export default App
