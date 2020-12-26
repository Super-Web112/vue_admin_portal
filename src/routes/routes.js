import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Login from "@/pages/Login.vue";
import Sales from "@/pages/Sales.vue";
import Service from "@/pages/Service.vue";
import Inventory from "@/pages/Inventory.vue";
import Payout from "@/pages/Payout.vue";
import Offer from "@/pages/UserProfile/Offer.vue";
import Period from "@/pages/UserProfile/Misc.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "order",
        name: "Sales",
        component: Sales
      },
      {
        path: "service",
        name: "Service",
        component: Service
      },
      {
        path: "inventory",
        name: "Inventory",
        component: Inventory
      },
      {
        path: "payout",
        name: "Payout",
        component: Payout
      },
      {
        path: "offers",
        name: "Offer",
        component: Offer
      },
      {
        path: "period",
        name: "Miscellaneous",
        component: Period
      }
    ]
  }
];

export default routes;
