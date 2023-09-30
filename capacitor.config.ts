import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'biorhythms',
  webDir: 'build',
  server: {
    url: 'http://192.168.1.168:3000',
    cleartext: true,
  },
};

export default config;
