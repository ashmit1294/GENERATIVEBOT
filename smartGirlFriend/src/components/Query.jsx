import React from 'react'

const query = ({text}) => {
  return (
    <div className="mb-2 text-right">
            <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">{text}</p>
    </div>
  )
}

export default query