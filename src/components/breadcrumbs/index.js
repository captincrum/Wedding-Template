import React from 'react'
import './style.css'

const Breadcrumbs = ( props ) =>{
    return(
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.Blog}</h2>
                        <ol className="breadcrumb">
                            <li>{props.Blogd}</li>
                        </ol>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Breadcrumbs;