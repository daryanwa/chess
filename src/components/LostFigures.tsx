import { title } from 'process'
import React from 'react'
import { Figure } from '../models/figures/Figure';




interface LostFigures{
    title: string;
    figures: Figure[]
}



const LostFigures: React.FC<LostFigures> = ({title, figures}) =>  {
  return (
    <div className='lost'>
        <h3>{title}</h3>
        {figures.map(figure => 
            <div key={figure.id}>
                {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} /> }
            </div>
        )}
    </div>
  )
}

export default LostFigures