/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import WarehouseInventoryPage from "@/pages/WarehouseInventoryPage/WarehouseInventoryPage";

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
  },
  {
    name: 'Inventory',
    path: '/details',
    component: WarehouseInventoryPage
  }
];

export default routes;
