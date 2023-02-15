import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img 
          src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle"> 
        Neque porro quisquam est 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor"> Author: <b> Patrobas</b></span>
          <span className="singlePostDate"> 1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet dolores sit. Ea mollitia iusto nostrum illo dolores. Quia voluptatem placeat laborum omnis ipsa et nesciunt praesentium sapiente neque delectus!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sunt explicabo perferendis id error quaerat libero iste quisquam placeat inventore, doloremque distinctio. Dicta temporibus quis rerum laboriosam at exercitationem esse.
       </p>
      </div>  
    </div>
  )
}
