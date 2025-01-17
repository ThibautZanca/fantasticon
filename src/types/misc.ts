export enum FontAssetType {
  EOT = 'eot',
  WOFF2 = 'woff2',
  WOFF = 'woff',
  TTF = 'ttf',
  SVG = 'svg'
}

export enum OtherAssetType {
  CSS = 'css',
  SCSS = 'scss',
  SASS = 'sass',
  HTML = 'html',
  JSON = 'json',
  TS = 'ts',
  SCSS_VARIABLES = 'variables',
}

export const ASSET_TYPES_WITH_TEMPLATE = [
  OtherAssetType.CSS,
  OtherAssetType.HTML,
  OtherAssetType.SCSS,
  OtherAssetType.SASS,
  OtherAssetType.SCSS_VARIABLES,
];

export const ASSET_TYPES = { ...FontAssetType, ...OtherAssetType };

export type AssetType = FontAssetType | OtherAssetType;
