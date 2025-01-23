var capacitorCapacitorShake = (function (exports, core) {
    'use strict';

    const CapacitorShake = core.registerPlugin('CapacitorShake', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorShakeWeb()),
    });

    /* eslint-disable @typescript-eslint/no-unused-vars */
    class CapacitorShakeWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorShakeWeb: CapacitorShakeWeb
    });

    exports.CapacitorShake = CapacitorShake;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
