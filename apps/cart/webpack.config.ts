import { composePlugins } from '@nx/webpack';
import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default composePlugins(
    withModuleFederation(config, {
        dts: false,
        // @ts-expect-error lib needs to define it
        filename: 'remoteEntry.js',
        library: undefined,
    }),
    (config) => {
        if(config.output){
            config.output.scriptType = 'text/javascript';
        }
        return config;
    }
);
