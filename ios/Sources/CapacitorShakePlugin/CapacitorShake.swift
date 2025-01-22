import Foundation
import Shake

@objc public class CapacitorShake: NSObject {
    @objc public func start(_ apiKey: String) -> Void {
        Shake.configuration.isCrashReportingEnabled = true
        Shake.start(apiKey: apiKey)
    }

    @objc public func show() -> Void {
        DispatchQueue.main.async {
            Shake.show()
        }
    }

    @objc public func registerUser(_ userId: String) -> Void {
        Shake.registerUser(userId: userId)
    }
}
