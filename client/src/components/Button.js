import React from 'react'

function Button({title,onClick,variant,disabled ,fullwidth,type}) {

  let className='bg-primary p-1 text-white '

  if(fullwidth){
    className += 'w-full'
  }

if(variant==='outlined'){
  className=className.replace('bg-primary','border border-primary text-primary bg-white')
}

  return (
    <div>
    <button className={className} type={type}
      onClick={onClick} disabled={disabled}>
        {title}
    </button>
    </div>
  )
}

export default Button
