import { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);

    return (
        <section onClick={() => {setClicks(clicks + 1)}}>
            <img alt='animals'  src={svgMap[type]}/>
            <img 
            alt='heart'
            src={heart}
            style={{width: 10 + 10 * clicks}}
            />
        </section> 
    )
}

export default AnimalShow;