import { LayoutGrid, Briefcase, GitBranch, Users, Settings } from 'lucide-react';
import type { BuildRecord } from '../types/build';

export const mockBuilds: BuildRecord[] = [
  { 
    id: 1, version: 'aplicacion_example-2.05.04-beta', versionFlutter: '3.23.25' ,
    component: 'BBVA',
    assets: [
      { name: 'BBVA-release-v2.4.12.zip', size: '12.4 MB', type: 'ZIP' },
      { name: 'BBVA-debug-v2.4.12.zip', size: '15.1 MB', type: 'ZIP' }
    ]
  },
  { 
    id: 2, version: 'aplicacion_example-2.05.03-beta', versionFlutter: '3.23.25',
    component: 'BBVA',
    assets: [
      { name: 'BBVA-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'BBVA-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 3, version: 'aplicacion_example-2.05.02-beta', versionFlutter: '3.23.25', 
    component: 'BBVA',
    assets: [
      { name: 'BBVA-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'BBVA-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 1, version: 'aplicacion_example-2.05.04-beta', versionFlutter: '3.23.25' ,
    component: 'BBVA',
    assets: [
      { name: 'BBVA-release-v2.4.12.zip', size: '12.4 MB', type: 'ZIP' },
      { name: 'BBVA-debug-v2.4.12.zip', size: '15.1 MB', type: 'ZIP' }
    ]
  },
  { 
    id: 2, version: 'aplicacion_example-2.05.03-beta', versionFlutter: '3.23.25',
    component: 'BBVA',
    assets: [
      { name: 'BBVA-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'BBVA-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 3, version: 'aplicacion_example-2.05.02-beta', versionFlutter: '3.23.25', 
    component: 'BBVA',
    assets: [
      { name: 'BBVA-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'BBVA-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 1, version: 'aplicacion_example-2.05.04-beta', versionFlutter: '3.23.25' ,
    component: 'BBVA',
    assets: [
      { name: 'BBVA-release-v2.4.12.zip', size: '12.4 MB', type: 'ZIP' },
      { name: 'BBVA-debug-v2.4.12.zip', size: '15.1 MB', type: 'ZIP' }
    ]
  },
  { 
    id: 2, version: 'aplicacion_example-2.05.03-beta', versionFlutter: '3.23.25',
    component: 'BBVA',
    assets: [
      { name: 'BBVA-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'BBVA-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 3, version: 'aplicacion_example-2.05.02-beta', versionFlutter: '3.23.25', 
    component: 'BBVA',
    assets: [
      { name: 'BBVA-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'BBVA-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 5, version: 'aplicacion_example-2.05.02-beta', versionFlutter: '3.23.25', 
    component: 'Banorte',
    assets: [
      { name: 'Banorte-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'Banorte-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
  { 
    id: 4, version: 'aplicacion_example-2.05-beta', versionFlutter: '3.23.25' ,
    component: 'Banorte',
    assets: [
      { name: 'Banorte-app-v1.0.2.apk', size: '24.5 MB', type: 'APK' },
      { name: 'Banorte-app-v1.0.2.aab', size: '22.1 MB', type: 'AAB' }
    ]
  },
];

export const tabs = [
  { id: 'BBVA', label: 'BBVA', count: 12 },
  { id: 'Banorte', label: 'Banorte', count: 4 },
  { id: 'Citi', label: 'Citi', count: 2 },
  { id: 'M Libre', label: 'M Libre', count: 8 },
];

export const sidebarItems = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'projects', label: 'Projects', icon: Briefcase, active: true },
  { id: 'builds', label: 'Builds', icon: GitBranch },
  { id: 'teams', label: 'Teams', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

// 1 segundo de delay
export const fetchBuilds = async (componentId: string): Promise<BuildRecord[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockBuilds.filter((b) => b.component === componentId);
      resolve(filtered);
    }, 1000); 
  });
};