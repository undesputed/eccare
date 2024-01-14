import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SuspenseLoader from "../components/SuspenseLoader";
import Header from "../components/Header/header";
import React from "react";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

//Admin Pages
const AdminDashboard = Loader(
  lazy(() => import("../pages/dashboard/dashboard"))
);
const LabTest = Loader(lazy(() => import("../pages/labTest/labTest")));
const AddLabTest = Loader(
  lazy(() => import("../pages/labTest/addLabTest/addLabTest"))
);
const AddField = Loader(
  lazy(() => import("../pages/labTest/addField/addField"))
);
const Patient = Loader(lazy(() => import("../pages/patient/patient")));
const PatientDetail = Loader(
  lazy(() => import("../pages/patient/details/details"))
);
const PrintResult = Loader(
  lazy(() => import("../pages/patient/printResult/printResult"))
);

//Component

const routes: RouteObject[] = [
  {
    path: "",
    element: <Header />,
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "lab-test",
        children: [
          {
            path: "",
            element: <LabTest />,
          },
          {
            path: "addLabTest",
            element: <AddLabTest />,
          },
          {
            path: "addField",
            element: <AddField />,
          },
        ],
      },
      {
        path: "patient",
        children: [
          {
            path: "",
            element: <Patient />,
          },
          {
            path: "detail",
            element: <PatientDetail />,
          },
          {
            path: "print",
            element: <PrintResult />,
          },
        ],
      },
    ],
  },
];

export default routes;
