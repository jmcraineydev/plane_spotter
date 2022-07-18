const PORT = process.env.PORT || 3000;
const { setupServer } = require("./server");
const app = setupServer();

(async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`server is listening @ http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(`App failed to start: ${err}`);
    process.exit(-1);
  }
})();
