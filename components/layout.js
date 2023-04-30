import NavBar from './NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className=" mx-auto ">{children}</main>
  </>
);

export default Layout;
