## Project Structure

```md
.
├── LICENSE
├── README.md
├── mix-manifest.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── components
│   │   │   └── Popup.vue
│   │   └── popup.js
│   ├── background.js
│   ├── images
│   │   ├── icon-128x128.png
│   │   ├── icon-16x16.png
│   │   ├── icon-32x32.png
│   │   └── icon-48x48.png
│   ├── manifest.json
│   ├── popup.html
│   └── sass
│       └── popup.scss
└── webpack.mix.js
```

- `src/app/` directory contains **Vue** stuff. The **Vue app** is rendered into `src/app/popup.js` and used inside `poopup.html`.
- `src/images/` directory contains icons.
- `src/sass/` contains styles that is used in `popup.html`
- if you wish to add more scripts, styles and want to include in final `popup.html` then make sure to add that them in `src/popup.html`. Finally, make sure to tweak `mix-manifest.json` and `webpack.mix.js`

## Run, Build

Run development app with hot reload

```bash
npm run dev
```

Build for production

```bash
npm run prod
```
