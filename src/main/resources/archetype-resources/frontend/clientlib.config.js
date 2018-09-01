module.exports = {
  // default working directory (can be changed per 'cwd' in every asset option)
  context: __dirname,

  // path to the clientlib root folder (output)
  clientLibRoot: "../bundles/core/src/main/webapp/clientlibs-root",

  // define all clientlib options here as array... (multiple clientlibs)
  libs: [
    {
      name: "${projectName}.app",
      assets: {
        js: [
          "dist/static/js/index.js",
          "dist/static/js/index.js.map"
        ],
        css: [
          "dist/static/css/index.css",
          "dist/static/css/index.css.map"
        ],
        resources: {
          "cwd": "./public/",
          "flatten": false,
          "files": [
            "**/*.*"
          ]
        }
      }
    },
    {
      name: "${projectName}.all",
      embed: [
        "core.wcm.components.image.v1",
        "${projectName}.app"
      ],
      jsProcessor: [
        "default:none",
        "min:gcc;compilationLevel=whitespace"
      ],
      longCacheKey: "${project.version}-${buildNumber}",
      assets: {
        js: [],
        css: []
      }
    },
  ]
}