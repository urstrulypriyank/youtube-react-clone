import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/slices/hamBurgerSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"));
  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return <div>Namaste From watchpage</div>;
};

export default WatchPage;
