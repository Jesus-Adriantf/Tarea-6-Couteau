import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Couteau_app',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    allowNavigation: [
      "universities.hipolabs.com"
    ]
  }
};

export default config;
