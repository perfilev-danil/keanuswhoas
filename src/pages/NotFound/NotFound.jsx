import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      Seems like your whoas <br /> are not fount :C
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
