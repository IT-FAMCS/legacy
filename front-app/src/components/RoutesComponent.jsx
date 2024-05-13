import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import FandraizPage from "../pages/FandraizPage";
import RabochkaPage from "../pages/RabochkaPage";
import NauchkaPage from "../pages/NauchkaPage";
import DecoratorkaPage from "../pages/DecoratorkaPage";
import ITPage from "../pages/ITPage";
import KorporativPage from "../pages/KorporativPage";
import KreatorkaPage from "../pages/KreatorkaPage";
import MedyikaPage from "../pages/MedyikaPage";
import PhotoVideoPage from "../pages/PhotoVideo";
import TikTokPage from "../pages/TikTokPage";
import DRfpmiPage from "../pages/DRfpmiPage";
import DRNauchkiPage from "../pages/DRNauchkiPage";
import FPMushkaPage from "../pages/FPMushkaPage";
import KapustnikPage from "../pages/KapustnikPage";
import MisterMissPage from "../pages/MisterMissPage";
import PiarPage from "../pages/PiarPage";
import ScienceConfPage from "../pages/ScienceConfPage";
import TurTropaPage from "../pages/TurTropaPage";
import DlyaPredsedaPage from "../pages/DlyaPredsedaPage";
import SovetyActivistuPage from "../pages/SovetyActivistuPage";
import MenagementPage from "../pages/MenagementPage";
import FAQPage from "../pages/FAQPage";
import HistoryPage from "../pages/HistoryPage";
import KriteriiIsklPage from "../pages/KriteriiIsklPage";
import KriteriiPPage from "../pages/KriteriiPPage";
import LoginPage from "../pages/LoginPage";
import CreatorsPage from "../pages/CreatorsPage";

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