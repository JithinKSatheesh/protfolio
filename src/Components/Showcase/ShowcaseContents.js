import React from 'react'
import {Showcard1} from './ShowCards'
import project1 from '../../images/project1.png'

function Showcasecontents1(props) {
    

    return (
        <>
            <Showcard1 image={project1} title={"Ecommerce"} visit={"/"} />
            <Showcard1 image={project1}/>
            <Showcard1 image={project1}/>
            <Showcard1 image={project1}/>
            <Showcard1 image={project1}/> 
        </>
    )
}

export {Showcasecontents1}
