/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import EditWarehousePage from "../pages/EditWarehousePage/EditWarehousePage";

/* ROUTE CONFIG */
const routes = [
  {
    name: 'Home',
    path: '/',
    component: WarehousePage
  },
  {
    name: 'Edit Warehouse',
    path: '/editwarehouse',
    component: EditWarehousePage
  },
  {
    name: '404',
    path: '*',
    component: WarehousePage
  }
];

export default routes;
