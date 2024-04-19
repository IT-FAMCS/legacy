import React from "react";
import { departmentsInfo } from "../constants/departments-info";
import { MenuCard } from "../components/MenuCard";
import "../App.css";
import { eventsInfo } from "../constants/events-info";
import { EventCard } from "../components/MenuCard";
import {darkTheme, lightTheme} from "../constants/Theme"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function HomePage() {
  const [themeMode, setThemeMode] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
    <div className="HomePage">
      <div className="SectionName">Гайды по отделам</div>
      <div className="SectionName2">
        Здесь вы можете узнать актуальную информацию про отделы Проектного
        Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="Buttons">
        {departmentsInfo.map((department) => {
          return (
            <MenuCard
              header={department.header}
              text={department.text}
              link={department.link}
            />
          );
        })}
      </div>

      <div className="SectionName">Гайды по подготовке к мероприятиям</div>
      <div className="SectionName2">
        Здесь вы можете узнать актуальную информацию про мероприятия/подготовку
        к мероприятиям Проектного Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="Buttons">
        {eventsInfo.map((department) => {
          return (
            <EventCard header={department.header} link={department.link} />
          );
        })}
      </div>
      <div className="SectionName">Общая Информация</div>
      <ul className="Info">
        <li>
          <a href="/dlyapredseda">Для председателя</a>
        </li>
        <li>
          <a href="/sovetyactivistu">Советы новому активисту</a>
        </li>
        <li>
          <a href="/menagement">
            Как пробовать пробиться в менеджмент/управление
          </a>
        </li>
        <li>
          <a href="/faq">FAQ для активиста</a>
        </li>
        <li>
          <a href="/kriteriip">Критерии поощрений</a>
        </li>
        <li>
          <a href="/kriteriiiskl">Критерии исключений</a>
        </li>
        <li>
          <a href="/history">История</a>
        </li>
      </ul>
    </div>
    </ThemeProvider>
  );
}
