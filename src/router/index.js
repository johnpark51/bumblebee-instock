/* ROUTES */
import WarehousePage from "@/pages/WarehousePage/WarehousePage";
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
