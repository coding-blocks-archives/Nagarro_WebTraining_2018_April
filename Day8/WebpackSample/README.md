# Create Package, install requirements

```shell
npm init
npm install webpack webpack-cli
```

# In package.json add webpack command

```json
{
  "scripts": {
    "webpack": "webpack"
  }
}
```

# To create bundle

```shell
npm run webpack
```

# In HTML file, use the dist

```html
<script src="dist/main.js"></script>
```
