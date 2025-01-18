let IS_PROD=true;
const server=IS_PROD?
"https://fconnect-2dgo.onrender.com"
:
"http://localhost:8000"

export default server;