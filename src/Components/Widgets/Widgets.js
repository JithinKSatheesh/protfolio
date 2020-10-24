import React from 'react'
import './Widgets.css'

export default function Widgets(props) {
    

    return (
        <>

           <div className="widgetCard p-2">
                {props.widgetbody}
           </div>
        </>
    )
}
