import React from 'react'



function Showcard1(props) {
    

    return (
        <>
            <div className="showCard m-3 p-2">
                <img src={props.image} className="img-fluid" alt=""/>
                <div className="showCard_hover">
                    <div className="space-20"></div>
                    <div className="small text-center text-dark">
                        {props.title}
                    </div>
                    <div className="small text-center text-primary">
                        View
                    </div>
                </div>
            </div>
        </>
    )
}

export {Showcard1}