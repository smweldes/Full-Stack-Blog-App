import React from 'react'

function Post() {
    return (
        <div className="post">
            <img
              className="postImage"
              src="https://i.ibb.co/7zYdH9n/nature1.jpg"
              alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Font Awesome is a font and icon toolkit</span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            A frontend engineer is vital to the success of a website. The position of the frontend 
            engineer focuses on making websites friendly and functional to its users. ... Additionally, 
            frontend engineers develop templates and create pages and applications using various coding 
            languages such as HTML, CSS and JavaScript.
            A frontend engineer is vital to the success of a website. The position of the frontend 
            engineer focuses on making websites friendly and functional to its users. ... Additionally, 
            frontend engineers develop templates and create pages and applications using various coding 
            languages such as HTML, CSS and JavaScript.
            A frontend engineer is vital to the success of a website. The position of the frontend 
            engineer focuses on making websites friendly and functional to its users. ... Additionally, 
            frontend engineers develop templates and create pages and applications using various coding 
            languages such as HTML, CSS and JavaScript.
            </p>
        </div>
    )
}

export default Post
