import { Link } from "react-router-dom";
import Testimonial from "../testimonial/Testimonial";
import About from "../about/About";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/reducers/alertsSlice";
import { getAllUsers } from "../../redux/actions/otherProfileAction";
import DisplayUserList from "../../compoents/otherUser/DisplayUserList";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { clearAllUsers } from "../../redux/reducers/otherProfileReducer";
import RandomPosts from "../../compoents/otherUser/RandomPosts";

const Home = () => {
  const token = localStorage.getItem("token");
  const { Users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);

  const handleShowUsers = async () => {
    dispatch(showLoading());
    if (hide) {
      await dispatch(getAllUsers());
    } else {
      dispatch(clearAllUsers());
    }
    setHide(!hide);
    dispatch(hideLoading());
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 mt-14">
      <header className="py-8">
        <h1 className="text-4xl font-bold text-gray-800 ml-3">
          Welcome to Just{" "}
          <span className="text-orange-400 border-b border-black">Share</span>
        </h1>
      </header>
      <main className="text-center">
        <p className="text-lg text-gray-600 mb-6">
          Explore our amazing features and services.
        </p>
        {/* navigation links */}
        <div className="flex space-x-4">
          {token ? (
            <>
              <Link
                to="/services"
                className="px-6 py-3 rounded-md bg-indigo-500 text-white font-semibold text-sm transition duration-300 hover:bg-indigo-600"
              >
                View Services
              </Link>
              <Link
                to="/user"
                className="px-6 py-3 rounded-md bg-indigo-500 text-white font-semibold text-sm transition duration-300 hover:bg-indigo-600"
              >
                User Profile
              </Link>
            </>
          ) : (
            <div className="flex justify-between gap-5 items-center ml-3">
              <Link
                to="/register"
                className="px-6 py-3 rounded-md bg-indigo-500 text-white font-semibold text-sm transition duration-300 hover:bg-indigo-600"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 rounded-md bg-indigo-500 text-white font-semibold text-sm transition duration-300 hover:bg-indigo-600"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </main>

      <Testimonial />
      <div>
        <button
          onClick={handleShowUsers}
          className="font-semibold text-white flex justify-center items-center px-2 py-2 bg-orange-500 rounded-md"
        >
          <span>{hide ? "Show More" : "Hide"}</span>
          <span className="mt-1">
            <FaAngleDown size={20} />
          </span>
        </button>
        {!hide && <DisplayUserList />}
      </div>
      <About />

      <RandomPosts />
    </div>
  );
};

export default Home;
