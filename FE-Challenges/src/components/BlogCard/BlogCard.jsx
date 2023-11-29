/* eslint-disable react/prop-types */
import "./BlogCard.css"

const BlogCard = ({tag,title,desc,personImg,personName,personTime}) => {
  return (
    <div className="blogCard">
        <div className="blogImg"></div>
        <div className="info">
            <div className="tag">{tag}</div>
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            <div className="person">
                <div className="left">
                    <img className="leftImg" alt="pImg" src={personImg}/>
                </div>
                <div className="right">
                    <div className="personName">{personName}</div>
                    <div className="personTime">{personTime}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard