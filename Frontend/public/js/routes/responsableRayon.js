import promotions from "../pages/respRayonPages/promotions.js";

const route = (route) => {
  const routes = [
    { path: "promotions", view: promotions }
  ];

  let findView = routes.find((element) => element.path === route);
  console.log(findView);

  return findView.view.getContent();
};
export default route;
