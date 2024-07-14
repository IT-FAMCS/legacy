import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../Pages/home-page/HomePage";
import DlyaPredsedaPage from "../Pages/DlyaPredsedaPage";
import SovetyActivistuPage from "../Pages/SovetyActivistuPage";
import MenagementPage from "../Pages/MenagementPage";
import FAQPage from "../Pages/FAQPage";
import HistoryPage from "../Pages/HistoryPage";
import KriteriiIsklPage from "../Pages/KriteriiIsklPage";
import KriteriiPPage from "../Pages/KriteriiPPage";
import LoginPage from "../Pages/LoginPage";
import CreatorsPage from "../Pages/CreatorsPage";
import DepartmentTemplate from "../Pages/department-template/department-template";
import EventTemplate from "../Pages/event-template/event-template";
import { departments, events } from "../сonstants";
import RegistrationPage from "../Pages/RegistrationPage";
import { UserTokenInfo } from "../interfaces/user";

function RoutesComponent({
  userInfo,
}: {
  userInfo: UserTokenInfo | undefined;
}) {
  const routes = [
    { path: "/", element: <HomePage /> },
    ...departments.map((department) => {
      return {
        path: `/${department.short_title}`,
        element: <DepartmentTemplate departmentName={department.short_title} />,
      };
    }),
    ...events.map((event) => {
      return {
        path: `/${event.short_title}`,
        element: <EventTemplate eventTitle={event.short_title} />,
      };
    }),
    { path: "/dlyapredseda", element: <DlyaPredsedaPage /> },
    { path: "/sovetyactivistu", element: <SovetyActivistuPage /> },
    { path: "/menagement", element: <MenagementPage /> },
    { path: "/faq", element: <FAQPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/kriteriiiskl", element: <KriteriiIsklPage /> },
    { path: "/kriteriip", element: <KriteriiPPage /> },
    { path: "/registration", element: <RegistrationPage /> },
    { path: "/creators", element: <CreatorsPage /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ];

  return userInfo === undefined ? null : ( //loading перенести сюда!!
    <Routes>
      {userInfo?.valid
        ? routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))
        : [
            <Route key={"login"} path={"/login"} element={<LoginPage />} />,
            <Route
              key={"login-navigate"}
              path="*"
              element={<Navigate to="/login" replace />}
            />,
          ]}
    </Routes>
  );
}

export default RoutesComponent;
