const Nav = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav className="bg-lavender">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Nav;
