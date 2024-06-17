/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";

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
    component: WarehousePage
  }
];

export default routes;
