import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from 'styled-components';
import { themes, getTheme } from './components/Sidebar/Theme';

library.add(fas);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  const handleToggleSidebar = (newState) => {
    setSidebarOpen(newState);
  }

  return (
    <ThemeProvider theme={getTheme(currentTheme)}>
      <Sidebar
        color={currentTheme}
        theme={getTheme(currentTheme)}
        isOpened={sidebarOpen}
        onThemeChange={handleThemeChange}
        onToggleSidebar={handleToggleSidebar}
      />
    </ThemeProvider>
  )
}

export default App;