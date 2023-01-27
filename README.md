
## Boilerplate basics

This is meant for a quick start up of a React v18 application bundled with Webpack 5. 

> To get started run:
> `npm install`
> `npm run dev`

> To create a build into the `dist` folder run:
> `npm run build:dev`
> `npm run build:prod`


#### This boilerplate is meant for:
- "toy" apps for exploring React functionality
- a reference for webpack setup for bigger projects
- apps with static data structures (imported JSON files for rendering)
- simple apps reliant on non-restricted REST APIs, for example certain resources listed on: 
	> https://github.com/public-apis/public-apis

## Features

#### Out of the box support includes:
- JSX
- SASS
- Images (png, svg, jpg, jpeg, gif, ico)
- Server on `localhost:3000` by `webpack-dev-server`
- Build for production and development environments
- EJS template with custom templateParameters
- BundleAnalyzerPlugin

#### Does NOT include:
- Server side rendering
- Support for EJS partials
- Secure storage of secrets
