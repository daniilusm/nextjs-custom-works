import serialize from 'serialize-javascript';
import renderHead from 'utils/renderHead';

import config from '@config';

export const renderHtmlStart = (head: ReturnType<typeof renderHead>) =>
  `<!doctype html>
    <html ${head.htmlAttributes}>
      <head>
        <!-- Google Tag Manager -->
        <script defer>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KCBDL9T');</script>	
        <!-- End Google Tag Manager -->
        <!-- Hotjar Tracking Code for https://welcomeome.com/ -->
        <script defer>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2871569,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script defer>
        if (typeof window !== 'undefined') {
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              OneSignal.init({
                appId: '${config.oneSignal.appId}',
                safari_web_id: '${config.oneSignal.safari_web_id}',
                notifyButton: {
                  enable: false,
                },
                autoPrompt: true,
                allowLocalhostAsSecureOrigin: true,
              });
            });
          }
        </script>
        <!-- Meta Pixel Code -->
        <script defer>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1393728871160851');
          fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1393728871160851&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Meta Pixel Code -->
        <noscript>Javascript is disabled!</noscript>
        <meta charset="utf-8">
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png">
        
        <link rel="manifest" href="/manifest.json">
        <meta name="theme-color" 
          content="#ffffff" 
          media="(prefers-color-scheme: light)">
        <meta name="theme-color" 
          content="#000000" 
          media="(prefers-color-scheme: dark)">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="facebook-domain-verification" content="2ot2y5ejv90ywgxon080p5skc13mif" />
        



        ${head.meta}

        ${head.ogMeta}

        ${head.link}

        ${head.title}
        
        <script type="text/javascript">
          window.initMap = () => {
            window.__MAP_LOADED__ = true;
          }
        </script>
     

        <script src="https://maps.googleapis.com/maps/api/js?key=${config.maps.apiKey}&v=beta&map_ids=${config.maps.mapKey}&callback=initMap&libraries=places&language=en" defer>
        </script>
      </head>
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCBDL9T"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
  `;

export const renderHtmlEnd = (
  assets: Record<string, string>,
  initialState: Record<string, object>
) => `
    <!-- Store the initial state into window -->
    <script>
      // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__INITIAL_STATE__=${serialize(initialState)};
    </script>
    <script>
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
     for(let registration of registrations) {
      registration.unregister()
    } })
    </script>
    <!--    TODO pwa-->
    <!--    <script>"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});</script>-->
    <!-- Insert bundled scripts into <script> tag -->
    ${Object.keys(assets)
      .map(key =>
        key.substr(key.length - 2) === 'js'
          ? `<script crossorigin="anonymous" defer src="${assets[key]}"></script>`
          : ''
      )
      .join('')}
  </body>
</html>`;

export default (
  head: ReturnType<typeof renderHead>,
  assets: Record<string, string>,
  htmlContent: string,
  initialState: Record<string, object>
) => {
  return `${renderHtmlStart(head)}${htmlContent}${renderHtmlEnd(
    assets,
    initialState
  )}`;
};
