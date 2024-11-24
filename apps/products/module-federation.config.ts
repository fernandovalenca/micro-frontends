import { container } from 'webpack';
const { ModuleFederationPlugin } = container;

type ModuleFederationPluginOptions = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationPluginOptions = {
  name: 'products',
  filename: 'remoteEntry.js',
  remoteType: 'script',
  exposes: {
    './Module': './src/App.svelte',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
