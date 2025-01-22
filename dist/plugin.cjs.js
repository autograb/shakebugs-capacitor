'use strict';

var core = require('@capacitor/core');

const CapacitorShake = core.registerPlugin('CapacitorShake', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorShakeWeb()),
});

class CapacitorShakeWeb extends core.WebPlugin {
    start(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    show(_shakeScreen) {
        throw this.unimplemented('Not implemented on web.');
    }
    getShakeForm() {
        throw this.unimplemented('Not implemented on web.');
    }
    setShakeForm(_shakeForm) {
        throw this.unimplemented('Not implemented on web.');
    }
    setShakeTheme(_shakeTheme) {
        throw this.unimplemented('Not implemented on web.');
    }
    setHomeSubtitle(_subtitle) {
        throw this.unimplemented('Not implemented on web.');
    }
    setHomeActions(_actions) {
        throw this.unimplemented('Not implemented on web.');
    }
    isUserFeedbackEnabled() {
        throw this.unimplemented('Not implemented on web.');
    }
    setUserFeedbackEnabled(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    isEnableBlackBox() {
        throw this.unimplemented('Not implemented on web.');
    }
    setEnableBlackBox(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    isEnableActivityHistory() {
        throw this.unimplemented('Not implemented on web.');
    }
    setEnableActivityHistory(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    isShowFloatingReportButton() {
        throw this.unimplemented('Not implemented on web.');
    }
    setShowFloatingReportButton(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    isInvokeShakeOnShakeDeviceEvent() {
        throw this.unimplemented('Not implemented on web.');
    }
    setInvokeShakeOnShakeDeviceEvent(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    isInvokeShakeOnScreenshot() {
        throw this.unimplemented('Not implemented on web.');
    }
    setInvokeShakeOnScreenshot(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    getDefaultScreen() {
        throw this.unimplemented('Not implemented on web.');
    }
    setDefaultScreen(_shakeScreen) {
        throw this.unimplemented('Not implemented on web.');
    }
    isScreenshotIncluded() {
        throw this.unimplemented('Not implemented on web.');
    }
    setScreenshotIncluded(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    getShakingThreshold() {
        throw this.unimplemented('Not implemented on web.');
    }
    setShakingThreshold(_threshold) {
        throw this.unimplemented('Not implemented on web.');
    }
    getShowIntroMessage() {
        throw this.unimplemented('Not implemented on web.');
    }
    setShowIntroMessage(_show) {
        throw this.unimplemented('Not implemented on web.');
    }
    isAutoVideoRecording() {
        throw this.unimplemented('Not implemented on web.');
    }
    setAutoVideoRecording(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    isConsoleLogsEnabled() {
        throw this.unimplemented('Not implemented on web.');
    }
    setConsoleLogsEnabled(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    log(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    setMetadata(_key, _value) {
        throw this.unimplemented('Not implemented on web.');
    }
    clearMetadata() {
        throw this.unimplemented('Not implemented on web.');
    }
    setShakeReportData(_files) {
        throw this.unimplemented('Not implemented on web.');
    }
    silentReport(_description, _files, _configuration) {
        throw this.unimplemented('Not implemented on web.');
    }
    insertNetworkRequest(_data) {
        throw this.unimplemented('Not implemented on web.');
    }
    insertNotificationEvent(_data) {
        throw this.unimplemented('Not implemented on web.');
    }
    addPrivateView(_id) {
        throw this.unimplemented('Not implemented on web.');
    }
    removePrivateView(_id) {
        throw this.unimplemented('Not implemented on web.');
    }
    clearPrivateViews() {
        throw this.unimplemented('Not implemented on web.');
    }
    isSensitiveDataRedactionEnabled() {
        throw this.unimplemented('Not implemented on web.');
    }
    setSensitiveDataRedactionEnabled(_enabled) {
        throw this.unimplemented('Not implemented on web.');
    }
    startNotificationsEmitter() {
        throw this.unimplemented('Not implemented on web.');
    }
    stopNotificationsEmitter() {
        throw this.unimplemented('Not implemented on web.');
    }
    showNotificationsSettings() {
        throw this.unimplemented('Not implemented on web.');
    }
    startUnreadChatMessagesEmitter() {
        throw this.unimplemented('Not implemented on web.');
    }
    stopUnreadChatMessagesEmitter() {
        throw this.unimplemented('Not implemented on web.');
    }
    registerUser(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    updateUserId(_id) {
        throw this.unimplemented('Not implemented on web.');
    }
    updateUserMetadata(_metadata) {
        throw this.unimplemented('Not implemented on web.');
    }
    unregisterUser() {
        throw this.unimplemented('Not implemented on web.');
    }
    setPushNotificationsToken(_token) {
        throw this.unimplemented('Not implemented on web.');
    }
    showChatNotification(_notification) {
        throw this.unimplemented('Not implemented on web.');
    }
    setTags(_tags) {
        throw this.unimplemented('Not implemented on web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorShakeWeb: CapacitorShakeWeb
});

exports.CapacitorShake = CapacitorShake;
//# sourceMappingURL=plugin.cjs.js.map
