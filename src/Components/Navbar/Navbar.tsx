import React from 'react'

const Navbar = () => {
    return (
        <div className="col-md-11 mx-auto">
            <form>
                <nav className="navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky" id="navbarBlur" data-scroll="true">
                    <div className="input-group input-group-outline mb-4">
                        <label className="form-label">  Search</label>
                        <input type="text" className="form-control" />
                    </div>
                </nav>
            </form>
        </div>
    )
}

export default Navbar
