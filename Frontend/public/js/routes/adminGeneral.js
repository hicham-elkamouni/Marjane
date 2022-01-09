import adminsCentreList from "../pages/adminsCentreList.js";
import promotions from "../pages/promotions.js";
import overview from "../pages/overview.js";

const route = (route) => {
  const routes = [
    { path: "adminsCentreList", view: adminsCentreList },
    { path: "promotions", view: promotions },
    { path: "overview", view: overview },
  ];

  let findView = routes.find((element) => element.path === route);
  console.log(findView);

  return findView.view.getContent();
};
export default route;
