// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorShakebugs",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorShakebugs",
            targets: ["CapacitorShakePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorShakePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorShakePlugin"),
        .testTarget(
            name: "CapacitorShakePluginTests",
            dependencies: ["CapacitorShakePlugin"],
            path: "ios/Tests/CapacitorShakePluginTests")
    ]
)