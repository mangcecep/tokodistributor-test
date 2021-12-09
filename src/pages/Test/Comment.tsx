function Comment(item: { id: any, email: any, body: any }) {
    return (
        <div className="col-sm-4 my-2" >
            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                    <h5 className="card-title text-center h2">Id : {item.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">{item.email}</h6>
                    <p className="card-text">{item.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment