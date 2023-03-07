import React from 'react'
import '../App.css'
import RandomNumbersList from './RandomNumbersList'

function Modal({active, setActive}) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false) }>
        <div className='test' onClick={e => e.stopPropagation()}>
<RandomNumbersList/>
        </div>
    </div>
  )
}

export default Modal