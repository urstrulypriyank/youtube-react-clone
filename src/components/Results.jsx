import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
import { useEffect } from "react";

const Results = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return <div>Results</div>;
};

export default Results;
