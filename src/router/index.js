/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
import EditWarehousePage from "../pages/EditWarehousePage/EditWarehousePage";
import WarehouseDetailsPage from "@/pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseInventoryPage from "@/pages/WarehouseInventoryPage/WarehouseInventoryPage";
import AddWarehousePage from "@/pages/AddWarehousePage/AddWarehousePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

/* ROUTE CONFIG */
const routes = [
  {
    name: 'Home',
    path: '/',
    component: WarehousePage
  },
  {
    name: 'Edit Warehouse',
    path: '/warehouse/edit/:id',
    component: EditWarehousePage
  },
  {
    name: 'Warehouse Details',
    path: '/warehouse/:id',
    component: WarehouseDetailsPage
  },
  {
    name: 'Inventory',
    path: '/details',
    component: WarehouseInventoryPage
  },
  {
    name: 'Add Warehouse',
    path: '/warehouse/add',
    component: AddWarehousePage
  },
  {
    name: '404',
    path: '*',
    component: NotFoundPage
  },
];

export default routes;
