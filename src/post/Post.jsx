import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Sports</span>
        </div>
        <span className="postTitle">
          Bicycle Riding Competition
        </span>
        <hr/>
        <span className="postDate">2 hours ago</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto obcaecati accusamus provident a cumque odit animi, ullam reprehenderit laborum sunt fugit fugiat sint dolores culpa id, et quam sit!</p>
    </div>
  );
}
