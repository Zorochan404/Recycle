import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import '../assets/styles/Welcome.css'
import welcometest from '../assets/welcomeimg.gif'


export default function Welcome() {




  return (
    <>
    <div className='flex'>
        <img className='welcomeimg' src={welcometest}/>
        <div className='welcometext'>
          <h1>WELCOME</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, at debitis vero obcaecati corporis aspernatur similique voluptas eius numquam saepe, cumque quam, nihil hic maxime exercitationem perspiciatis corrupti ab ducimus itaque impedit quas! Nostrum mollitia ipsum temporibus fugit sunt maxime laborum porro, tempora illo, non alias adipisci iure in quod dolores consequatur. Aliquam veniam hic architecto modi asperiores sequi in nulla labore mollitia obcaecati exercitationem temporibus eum doloremque est accusamus officiis aperiam fugiat velit eos animi voluptate, sunt, quidem fugit ab? Eos cum nostrum architecto deleniti, facilis illum debitis quo dolores asperiores. Iure quas eaque eum consequatur dolorem, tempora laudantium dolor nihil eligendi vero rem consequuntur nostrum vel dicta quasi ex dolore incidunt voluptatibus. Vero nostrum repellendus eum eius error ipsum? Minima eius voluptatem, deserunt dolorum, ipsum perspiciatis corporis facilis aliquam officia nam impedit repellat suscipit debitis ea. Deserunt doloribus deleniti repudiandae modi at suscipit quos hic quaerat? Amet, atque.</p>
        </div>
        </div>
        
        <div className='btn'>
        <Button variant='contained' color ="grey"component={Link} to='/details'>Get Started
        </Button>
        </div>
        </>
  )
}
