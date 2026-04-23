
export interface VersionAsset {
  name: string;
  size: string;
  type: string;
}

export interface VersionsRecord {
  id: number;
  version: string;
  versionFlutter: string;
  component: string;
  assets: VersionAsset[];
}