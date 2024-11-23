import { ModuleFederationConfig, sharePackages } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': 'apps/cart/src/bootstrap.ts'
  },
};

export default config;