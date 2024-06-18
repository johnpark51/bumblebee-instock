/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import EditWarehousePage from "../pages/EditWarehousePage/EditWarehousePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import WarehouseInventoryPage from "@/pages/WarehouseInventoryPage/WarehouseInventoryPage";
import WarehouseDetailsPage from "@/pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddWarehousePage from "@/pages/AddWarehousePage/AddWarehousePage";

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
  },
  {
    name: 'Add Warehouse',
    path: '/add',
    component: AddWarehousePage
  }
];

export default routes;
