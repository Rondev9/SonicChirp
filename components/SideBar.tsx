import React from 'react'
import NewChat from './NewChat'

const SideBar = () => {
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <div>
                {/* new chat */}
                <NewChat />
                <div>
                    {/* Model selection */}
                </div>

                {/* Map through the chatRows */}

            </div>
        </div>
    </div>
  )
}

export default SideBar