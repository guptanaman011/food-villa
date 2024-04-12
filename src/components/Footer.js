import { useContext } from "react";
import userContext from "../utils/userContext";
function Footer() {
  const { user } = useContext(userContext);
  return (
    <>
        <h1 className="font-bold p-2 m-2">
        This site is developed by {user.name} - {user.email}
      </h1>
    </>
  );
}

export default Footer;
