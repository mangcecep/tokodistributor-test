import React from 'react'

const Loader = () => {
    return (
        <div className="container">
            <div className="position-absolute bottom-50 end-50">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader
