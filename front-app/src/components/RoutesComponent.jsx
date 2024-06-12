import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import DlyaPredsedaPage from "../Pages/DlyaPredsedaPage";
import SovetyActivistuPage from "../Pages/SovetyActivistuPage";
import MenagementPage from "../Pages/MenagementPage";
import FAQPage from "../Pages/FAQPage";
import HistoryPage from "../Pages/HistoryPage";
import KriteriiIsklPage from "../Pages/KriteriiIsklPage";
import KriteriiPPage from "../Pages/KriteriiPPage";
import LoginPage from "../Pages/LoginPage";
import CreatorsPage from "../Pages/CreatorsPage";
import DepartmentTemplate from '../Pages/department-template/department-template'
import EventTemplate from '../Pages/event-template/event-template'

const departments = [{short_title: 'fandraiz'},
  {short_title: 'rabochka'},
  {short_title: 'nauchka'},
  {short_title: 'decoratorka'},
  {short_title: 'it'},
  {short_title: 'korporativ'},
  {short_title: 'kreatorka'},
  {short_title: 'medyika'},
  {short_title: 'photovideo'},
  {short_title: 'tiktok'},
]

const events = [{short_title: 'drfpmi'},
  {short_title: 'drnauchki'},
  {short_title: 'fpmushka'},
  {short_title: 'kapustnik'},
  {short_title: 'mistermiss'},
  {short_title: 'piar'},
  {short_title: 'scienceconf'},
  {short_title: 'turtropa'},
]

function RoutesComponent() {
  const routes = [
    { path: "/", element: <HomePage /> },
    ...departments.map((department) => {
        return {
          path: `/${department.short_title}`, element: <DepartmentTemplate departmentName={department.short_title}/>
        }
    }),
   ...events.map((event) => {
    return {
      path: `/${event.short_title}`, element: <EventTemplate eventTitle={event.short_title}/>
    }
   }),
    { path: "/dlyapredseda", element: <DlyaPredsedaPage /> },
    { path: "/sovetyactivistu", element: <SovetyActivistuPage /> },
    { path: "/menagement", element: <MenagementPage /> },
    { path: "/faq", element: <FAQPage /> },
    { path: "/history", element: <HistoryPage /> },
    { path: "/kriteriiiskl", element: <KriteriiIsklPage /> },
    { path: "/kriteriip", element: <KriteriiPPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/creators", element: <CreatorsPage /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RoutesComponent;
