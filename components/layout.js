import NavBar from './NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className=" mx-auto ">{children}</main>
    <footer />
  </>
);

export default Layout;
