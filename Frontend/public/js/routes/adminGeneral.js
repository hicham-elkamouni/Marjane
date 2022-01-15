import adminsCentreList from "../pages/AdminGeneralPages/adminsCentreList.js";
import promotions from "../pages/adminCentrePages/promotions.js";
import overview from "../pages/AdminGeneralPages/overview.js";
import logs from "../pages/AdminGeneralPages/logs.js";

const route = (route) => {
  const routes = [
    { path: "adminsCentreList", view: adminsCentreList },
    { path: "promotions", view: promotions },
    { path: "overview", view: overview },
    { path: "logs", view: logs },
  ];

  let findView = routes.find((element) => element.path === route);
  console.log(findView);

  return findView.view.getContent();
};
export default route;
