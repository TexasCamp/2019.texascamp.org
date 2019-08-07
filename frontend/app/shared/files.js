// This module wraps static files and images.
// Very useful for icons, or any other asset that may be imported into multiple places within the react app.

export {
  default as favicon,
} from '!file-loader?name=favicon.ico!favicons/favicon.ico';
