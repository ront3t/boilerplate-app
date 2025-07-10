# boilerplate-app
boilerplate app for future projects with vite react and node + express

#server:
mkdir server
cd server
npm init -y
npm install express cors http-errors morgan
npm install -D typescript ts-node-dev @types/express @types/node @types/cors @types/morgan
npx tsc --init

#client
mkdir client
cd client
npm create vite@latest . -- --template react-ts
npm i
