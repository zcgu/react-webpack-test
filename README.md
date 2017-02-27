Install react
```
npm install --save react react-dom
```

Install babel
```
npm install --save-dev babel-loader babel-core babel-preset-env babel-preset-react
```

Install webpack
```
npm install --save webpack
```

Create a '.babelrc' file.
```
{
  "presets": ["env", "react"]
}
```

Create a 'webpack.config.js'
```
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
	path: BUILD_DIR,
	filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
	    test: /\.jsx?/,
	    include : APP_DIR,
	    loader : 'babel-loader'
	  }
    ]
  }
};

module.exports = config;
```

Add following scripts to 'scripts' in 'package.json'
```
"dev": "webpack -d --watch",
"build" : "webpack -p"
```

Include 'bundle.js' in .html body
```
<script src='bundle.js'>  </script>
```

Watch mode
```
npm run dev
```

Single build
```
npm run build
```
