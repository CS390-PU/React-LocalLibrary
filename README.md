# Install React Using Vite

1. npm create vite@latest
<pre>
@ryan2135 ➜ /workspaces/ReactI (main) $ npm create vite@latest
Need to install the following packages:
create-vite@6.5.0
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  my-app
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /workspaces/ReactI/my-app...
│
└  Done. Now run:

  cd my-app
  npm install
  npm run dev
  </pre>

2. install react-boostrap
<pre>
npm install react-bootstrap bootstrap
</pre>

3. Now I'm converting a working navbar example to the local-library example using express. Notice the directory I'm in.
<pre>
@ryan2135 ➜ /workspaces/React-LocalLibrary (main) $ mkdir server
@ryan2135 ➜ /workspaces/React-LocalLibrary (main) $ cd server
@ryan2135 ➜ /workspaces/React-LocalLibrary/server (main) $ npm init -y
Wrote to /workspaces/React-LocalLibrary/server/package.json:

{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}



@ryan2135 ➜ /workspaces/React-LocalLibrary/server (main) $ npm install express mongoose cors dotenv

added 86 packages, and audited 87 packages in 7s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
</pre>

4. Create app.js inside of server with the existing code.

5. Create .env and copy in existing code.