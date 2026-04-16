
export interface BuildAsset {
  name: string;
  size: string;
  type: string;
}

export interface BuildRecord {
  id: number;
  version: string;
  versionFlutter: string;
  component: string;
  assets: BuildAsset[];
}