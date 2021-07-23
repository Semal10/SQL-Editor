import React from 'react'
import Workspace from './Workspace'
import Dashboard from './Dashboard'

const Home = (props) => {
    return(
        <div className='home'>
            <Dashboard />
            <Workspace />
        </div>
    )
}

export default Home