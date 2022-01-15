import respRayonList from "../pages/adminCentrePages/respRayonList.js";
import promotions from "../pages/adminCentrePages/promotions.js";

const route = (route) => {
  const routes = [
    { path: "respRayonList", view: respRayonList },
    { path: "promotions", view: promotions }
  ];

  let findView = routes.find((element) => element.path === route);
  console.log(findView);

  return findView.view.getContent();
};
export default route;
