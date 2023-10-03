import React from 'react'

function Button( {text, link}) {
  return (
    <div>
      <a href={`${link}`}>
        <div className="bg-tertiary text-white font-bold px-[30px] py-[10px] rounded-[30px] inline-block">
            {text}
        </div>
      </a>
    </div>
  )
}

export default Button
