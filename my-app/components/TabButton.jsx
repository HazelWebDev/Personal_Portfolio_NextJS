import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'p-3 text-pink-400 border-4 border-green-400 bg-green-100 hover:border-4' : 'text-zinc-200'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 p-3 font-semibold hover:text-pink-400 hover:border border-green-400 rounded-lg shadow-md ${buttonClasses}`}>
    {children}
    </p>
    </button>
  )
}

export default TabButton