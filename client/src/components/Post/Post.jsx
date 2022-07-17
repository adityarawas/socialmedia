import React,{useState} from 'react'
import "./Post.css"
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiSendPlaneLine} from 'react-icons/ri'
const Post = () => {
  const [like, setlike] = useState(true);
  return (
    <div className='post'>
        <img src={`${window.location.origin}/img/PostPic1.jpg`} alt=""  />
        <div className='postsreactions'>
           { like ?
             <BsHeart  onClick={()=>setlike(prev=>!prev)}/>
             :
             <BsHeartFill onClick={()=>setlike(prev=>!prev)} className="liked"/>
           }
            <BiMessageSquareDetail />
            <RiSendPlaneLine />
        </div>
        <span>4 Likes</span>
        <div className='details'>
            <span><strong>Aditya Rawas</strong></span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi enim quisquam nulla voluptatibus suscipit explicabo nihil aliquid eos consequatur, earum beatae voluptatem magnam nemo ipsa quasi officia rerum nisi eligendi?</p>
        </div>
    </div>
  )
}

export default Post