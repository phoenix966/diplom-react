import './main.sass';
import Post from '../../components/post/Post';
import {useState} from 'react';

function Main() {
  const [posts,setPosts] = useState([
    {imgSrc:'assets/img/icon.png',title:'Analyzing User Data',text:'Who are you developing for? How will they use your design? Building user personas can answer these.',value:'6 videos',time:'4.5 hours',key: 1},
    {imgSrc:'assets/img/icon.png',title:'User Persona',text:'Who are you developing for? How will they use your design? Building user personas can answer these.',value:'6 videos',time:'4.5 hours',key: 2},
    {imgSrc:'assets/img/icon.png',title:'Prototyping',text:'Who are you developing for? How will they use your design? Building user personas can answer these.',value:'6 videos',time:'4.5 hours',key: 3},
    {imgSrc:'assets/img/icon.png',title:'Storyboarding',text:'Who are you developing for? How will they use your design? Building user personas can answer these.',value:'6 videos',time:'4.5 hours',key: 4},
  ])
  return (
    <div className="main">
      <div className="container main__container">
        {posts.map((post)=>{
          return(
            <Post
              title={post.title}
              text={post.text}
              imgSrc={post.imgSrc}
              value={post.value}
              time={post.time}
              key={post.key}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Main
