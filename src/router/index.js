/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

/* ROUTE CONFIG */
const routes = [
  {
    name: 'Home',
    path: '/',
    component: WarehousePage
  },
  {
    name: '404',
    path: '*',
    component: NotFoundPage
  }
];

export default routes;
