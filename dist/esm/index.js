import { registerPlugin } from '@capacitor/core';
const CapacitorShake = registerPlugin('CapacitorShake', {
    web: () => import('./web').then((m) => new m.CapacitorShakeWeb()),
});
export * from './definitions';
export { CapacitorShake };
//# sourceMappingURL=index.js.map