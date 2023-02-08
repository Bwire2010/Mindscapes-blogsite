import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          quas quod quam aliquam tempore sit dolore velit accusamus qui omnis
          reiciendis enim, voluptatum similique explicabo quis, mollitia aut eum
          impedit?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem"> Cinema</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Fashion</li>
            <li className="sidebarListItem">Life</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
      </div>
    </div>
  );
}
