import { NavBar } from "./Navbar";
import { Categories } from "./navigation/Categories";
import { Search } from "./navigation/Search";

export function ServerNavBar() {
  const children = {
    categories: <Categories />,
    search: <Search />,
  };

  return <NavBar>{children}</NavBar>;
}
