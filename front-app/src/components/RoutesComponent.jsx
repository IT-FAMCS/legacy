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
import RegistrationPage from "../Pages/RegistrationPage";
import CreatorsPage from "../Pages/CreatorsPage";

function RoutesComponent() {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/fandraiz", element: <FandraizPage /> },
    { path: "/rabochka", element: <RabochkaPage /> },
    { path: "/nauchka", element: <NauchkaPage /> },
    { path: "/decoratorka", element: <DecoratorkaPage /> },
    { path: "/it", element: <ITPage /> },
    { path: "/korporativ", element: <KorporativPage /> },
    { path: "/kreatorka", element: <KreatorkaPage /> },
    { path: "/medyika", element: <MedyikaPage /> },
    { path: "/photovideo", element: <PhotoVideoPage /> },
    { path: "/tiktok", element: <TikTokPage /> },
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
    { path: "/registration", element: <RegistrationPage /> },
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
