// declaration.d.ts
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': MyElementAttributes;
        }
        interface MyElementAttributes {
            src: string;
        }
    }
}
// packages
declare module 'jquery'

// paths
declare module '@components/*'
declare module '@container/*'
declare module '@generic/*'
declare module '@constants/*'
declare module '@stylesheet/*'
declare module '@images/*'
declare module '@utils/*'

// styles
declare module '*.scss'
declare module '*.css'

// media
declare module "*.png"
declare module '*.jpg'
declare module '*.jpeg'
declare module "*.ico"
declare module '*.svg'
declare module '*.gif'
declare module '*.pdf'
declare module '*.mp4'
declare module '*.glb'

// fonts
declare module "*.woff"
declare module '*.woff2'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'