import React from 'react'

const Workspace = (props) => {
    return(
        <div className='workspace'>
            <div className="workspace-nav"></div>
            <div className="workspace-area">
                <div className="editor"></div>
                <div className="output">
                    <div className="result"></div>
                    <div className="error"></div>
                </div>
            </div>
        </div>
    )
}

export default Workspace