import Header from "./Header";
import Footer from ".//Footer";

function Layout(props) {
  return (
    <div className="layout__container">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
