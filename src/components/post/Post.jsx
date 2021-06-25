import './post.sass';
import Info from '../info/Info';
import Bar from '../bar/Bar';

function Post({title,text,imgSrc,value,time}) {
  return (
    <div className="post">
        <div className="post__wrapper">
          <Info title={title} text={text} imgSrc={imgSrc}/>
          <Bar value={value} time={time}/>
        </div>
    </div>
  )
}

export default Post
