// config.forge.js
const path = require('path');

module.exports = {
    electronPackagerConfig: {
        packageManager: 'yarn',
        icon: path.resolve(__dirname, 'quicksight_logo.icns')
    },
    // packagerConfig: {},
    // makers: [
    //     {
    //         name: "@electron-forge/maker-squirrel",
    //         platforms: [
    //             "win32"
    //         ],
    //         config: {
    //             name: "my_new_app"
    //         }
    //     },
    //     {
    //         name: "@electron-forge/maker-zip",
    //         platforms: [
    //             "darwin"
    //         ]
    //     },
    //     {
    //         name: "@electron-forge/maker-deb",
    //         platforms: [
    //             "linux"
    //         ],
    //         config: {}
    //     },
    //     {
    //         name: "@electron-forge/maker-rpm",
    //         platforms: [
    //             "linux"
    //         ],
    //         config: {}
    //     }
    // ]
}