import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import FandraizPage from "../Pages/FandraizPage";
import RabochkaPage from "../Pages/RabochkaPage";
import NauchkaPage from "../Pages/NauchkaPage";
import DecoratorkaPage from "../Pages/DecoratorkaPage";
import ITPage from "../Pages/ITPage";
import KorporativPage from "../Pages/KorporativPage";
import KreatorkaPage from "../Pages/KreatorkaPage";
import MedyikaPage from "../Pages/MedyikaPage";
import PhotoVideoPage from "../Pages/PhotoVideo";
import TikTokPage from "../Pages/TikTokPage";
import DRfpmiPage from "../Pages/DRfpmiPage";
import DRNauchkiPage from "../Pages/DRNauchkiPage";
import FPMushkaPage from "../Pages/FPMushkaPage";
import KapustnikPage from "../Pages/KapustnikPage";
import MisterMissPage from "../Pages/MisterMissPage";
import PiarPage from "../Pages/PiarPage";
import ScienceConfPage from "../Pages/ScienceConfPage";
import TurTropaPage from "../Pages/TurTropaPage";
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
    { path: "/drfpmi", element: <DRfpmiPage /> },
    { path: "/drnauchki", element: <DRNauchkiPage /> },
    { path: "/fpmushka", element: <FPMushkaPage /> },
    { path: "/kapustnik", element: <KapustnikPage /> },
    { path: "/mistermiss", element: <MisterMissPage /> },
    { path: "/piar", element: <PiarPage /> },
    { path: "/scienceconf", element: <ScienceConfPage /> },
    { path: "/turtropa", element: <TurTropaPage /> },
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
