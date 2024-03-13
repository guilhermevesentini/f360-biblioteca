import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'f360-biblioteca',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'f360-biblioteca',
      proxiesFile: './src/components.d.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  transformAliasedImportPaths: false,
};
