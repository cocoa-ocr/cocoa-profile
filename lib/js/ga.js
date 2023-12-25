
const gaTag = (arguments) => {
  dataLayer.push(arguments);
}

const readGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  
  gaTag('js', new Date());
  gaTag('config', 'G-39J5QCTR20');
}

readGoogleAnalytics();