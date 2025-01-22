import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorShakePlugin)
public class CapacitorShakePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorShakePlugin"
    public let jsName = "CapacitorShake"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "start", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "show", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "registerUser", returnType: CAPPluginReturnPromise),
    ]
    
    private let implementation = CapacitorShake()
    
    public let errorApiKeyMissing = "ApiKey must be provided."
    public let errorUserIdMissing = "User Id must be provided."


    @objc func start(_ call: CAPPluginCall) {
         guard let apiKey = call.getString("apiKey") else {
            call.reject(errorApiKeyMissing)
            return
        }
        implementation.start(apiKey)
        call.resolve()
    }

    @objc func show(_ call: CAPPluginCall) {
        implementation.show()
        call.resolve()
    }

    @objc func registerUser(_ call: CAPPluginCall) {
        guard let userId = call.getString("userId") else {
            call.reject(errorUserIdMissing)
            return
        }
        implementation.registerUser(userId)
        call.resolve()
    }
}
