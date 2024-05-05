import React from 'react'

const Reach = (props) => {
    return (

        <div className='col-md-3 col-xsm-6 col-sm-4 rounded-2 border border-2 p-2 m-2'>
            <img src={props.image} alt="" className='rounded-2' width="100%"
                height={200} />
            <h2 >name: <span className='lead text-secondary
               fw-bold'>{props.name}</span></h2>
            <h2>worth: <span className='lead text-secondary
               fw-bold'>{props.worth}</span></h2>
            <h2>country: <span className='lead text-secondary
               fw-bold'>{props.country}</span></h2>
            <h2>businnes: <span className='lead text-success
               fw-bolder'>{props.source}</span></h2>
        </div>
    )
}
export default Reach