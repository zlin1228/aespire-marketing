import 'styles/global.css';
import 'styles/hubspotForm.css';

import { AnnouncementProvider } from 'context/AnnouncementContext';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <AnnouncementProvider>{element}</AnnouncementProvider>
);
