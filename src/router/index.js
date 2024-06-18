/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import EditWarehousePage from "../pages/EditWarehousePage/EditWarehousePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import WarehouseDetailsPage from "@/pages/WarehouseDetailsPage/WarehouseDetailsPage";

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
    name: 'WarehouseDetails',
    path: '/warehouse/details',
    component: WarehouseDetailsPage
  },
  {
    name: '404',
    path: '*',
    component: NotFoundPage
  }
];

export default routes;
