/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';
export class CapacitorShakeWeb extends WebPlugin {
    start(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    show(_shakeScreen) {
        throw this.unimplemented('Not implemented on web.');
    }
    registerUser(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map