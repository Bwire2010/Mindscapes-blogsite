import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node </span>
            <span className="headerTitleLg"> Mindscapes Blog</span>
        </div>
        <img className="headerImg" src="https://cdn.pixabay.com/photo/2014/10/05/06/05/rapeseeds-474558_960_720.jpg" alt="" />
    </div>
  )
}
