
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, source } = props
        return (
            <>
                <div className='my-4'>
                    <div>
                        <div className="card " style={{ width: "18rem" }}>
                            <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left:'88%', top:"1%" }}>
                                {source}
                            </span>
                            <img src={!imageUrl ? "https://bitsofco.de/content/images/2018/12/broken-1.png" : imageUrl} className="card-img-top" alt="Image Not Found" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}...</p>
                                <a href={newsUrl} rel="noreferrer" target="_blank" className="readButton btn btn-sm btn-warning">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default NewsItem
