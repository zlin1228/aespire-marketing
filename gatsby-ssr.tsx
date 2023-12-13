import { AnnouncementProvider } from 'context/AnnouncementContext';

import type { RenderBodyArgs } from 'gatsby';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <AnnouncementProvider>{element}</AnnouncementProvider>
);

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <script
      key="gtag-script"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted'
        });
      `,
      }}
    />,
  ]);
};
