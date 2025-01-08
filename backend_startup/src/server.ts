import createServer from ".";

const PORT = process.env.PORT || 8080;

const server = createServer();

server.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
});
