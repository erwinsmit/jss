import { Manifest } from '@root';

export default (manifest: Manifest) => {
  manifest.addComponent({
    name: 'Component1',
    displayName: 'Component1',
    placeholders: [{ name: 'page-header' }, { name: 'page-content' }],
  });
};
