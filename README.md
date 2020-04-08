# CS-UI - React UI Components

# Author

**M2 Data Center:**

- Site: [https://www.m2datacenter.com.br](https://www.m2datacenter.com.br)


# Installation

## Initial Configuration:
You need to have [NodeJs](https://nodejs.org/en/) (>= 10.0.0) installed on your local machine, before attempting to run a dev environment.

CS-UI is available as an [npm package]

**[Stable v4]**
```sh
// with npm
npm install cs-ui

// with yarn
yarn add cs-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {TextField} from "cs-ui";

function App() {
  return (
    <TextField type="text" label="Label" helperText="Label helper" />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
