/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import EditWarehousePage from "../pages/EditWarehousePage/EditWarehousePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import WarehouseInventoryPage from "@/pages/WarehouseInventoryPage/WarehouseInventoryPage";
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
  },
  {
    name: 'Inventory',
    path: '/details',
    component: WarehouseInventoryPage
  }
];

export default routes;
