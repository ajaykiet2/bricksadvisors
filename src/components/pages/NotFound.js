import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
            <div className="has-bg bg-silver">
                <div className="error">
                    <div className="error-code m-b-10 p-t-50 text-theme-gradient">404</div>
                    <div className="error-content">
                        <div className="error-message">We couldn't find it...</div>
                        <div className="error-desc m-b-30">
                            The page you're looking for doesn't exist. <br/>
                            Perhaps, there pages will help find what you're looking for.
                        </div>
                        <div>
                            <Link to="/" className="btn btn-primary p-l-20 p-r-20"><i className="fa fa-arrow-left"></i> Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default NotFound;