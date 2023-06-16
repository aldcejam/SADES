import ContainerGlobal from './layout-style/ContainerGlobal';
import ContainerPage from './layout-style/ContainerPage';

import Sidebar from 'src/components/templates/sidebar';
import SettingsButtons from 'src/components/molecules/settingsButtons'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerGlobal>
      <Sidebar />
      <SettingsButtons />
      <ContainerPage>
        {children}
      </ContainerPage>
    </ContainerGlobal>
  );
}
