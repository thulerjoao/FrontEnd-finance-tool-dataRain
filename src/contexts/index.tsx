import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { ActiveProvider } from "./activePage";
import { AuthProvider } from "./auth";
import { ClientProvider } from "./clientContext";
import { ProjectProvider } from "./projectContext";
import { QuestionsProvider } from "./questions";
import { TeamProvider } from "./teamContext";
import { UserProvider } from "./userContext";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UserProvider>
            <ClientProvider>
              <QuestionsProvider>
                <ActiveProvider>
                  <ProjectProvider>
                    <TeamProvider>{children}</TeamProvider>
                  </ProjectProvider>
                </ActiveProvider>
              </QuestionsProvider>
            </ClientProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
