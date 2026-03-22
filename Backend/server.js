// const express = require("express");
// const app = express();
// const connectDB = require("./config/DB");
// require("dotenv").config();

// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const expressSession = require("express-session");
// const flash = require("connect-flash");
// const path = require("path");
// const MongoStore = require("connect-mongo");
// const client = require("prom-client");

// const cartRouter = require("./routes/cartRouter");
// const ownersRouter = require("./routes/ownersRouter");
// const usersRouter = require("./routes/usersRouter");
// const productsRouter = require("./routes/productsRouter");
// const contactRouter = require("./routes/contactRouter");
// const orderRouter = require("./routes/orderRouter");
// const AllProductsRouter = require("./routes/AllProducts");

// // Connect to the database
// connectDB();

// // Middleware setup
// const corsOptions = {
//   origin: process.env.CLIENT_URL,
// };
// app.use(cors(corsOptions));
// app.use(express.json()); // To accept JSON data
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(
//   expressSession({
//     resave: false,
//     saveUninitialized: true,
//     secret: process.env.EXPRESS_SESSION_SECRET,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGODB_URI, // Ensure this variable is set
//     }),
//     cookie: { secure: false },
//   })
// );
// app.use(flash());

// // API routes
// app.use("/api", ownersRouter);
// app.use("/api", usersRouter);
// app.use("/api", productsRouter);
// app.use("/api", cartRouter);
// app.use("/api", contactRouter);
// app.use("/api", orderRouter);
// app.use("/api", AllProductsRouter);

// // Deployment logic
// // Serve static files from the Frontend/dist directory
// app.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist')));

// // Serve index.html for all routes not matching API routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'Frontend', 'dist', 'index.html'));
// });

// // Start the server
// const port = process.env.PORT || 3000; // Default to 3000 if process.env.PORT isn't set
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// module.exports = app;


const express = require("express");
const app = express();
const connectDB = require("./config/DB");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressSession = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const MongoStore = require("connect-mongo");

// 🔥 Prometheus client
const client = require("prom-client");

// Routes
const cartRouter = require("./routes/cartRouter");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const contactRouter = require("./routes/contactRouter");
const orderRouter = require("./routes/orderRouter");
const AllProductsRouter = require("./routes/AllProducts");

// Connect to DB
connectDB();

// Middleware
const corsOptions = {
  origin: process.env.CLIENT_URL,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  expressSession({
    resave: false,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: { secure: false },
  })
);

app.use(flash());

/* =======================================================
   🔥 PROMETHEUS MONITORING SETUP
======================================================= */

// Default system metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

// Request counter
const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

// Response time tracker
const responseTime = new client.Histogram({
  name: "http_response_time_seconds",
  help: "Response time in seconds",
  labelNames: ["method", "route"],
});

// Middleware for metrics
app.use((req, res, next) => {
  const end = responseTime.startTimer();

  res.on("finish", () => {
    requestCounter.inc({
      method: req.method,
      route: req.originalUrl,
      status: res.statusCode,
    });

    end({
      method: req.method,
      route: req.originalUrl,
    });
  });

  next();
});

/* =======================================================
   🔥 API ROUTES
======================================================= */

app.use("/api", ownersRouter);
app.use("/api", usersRouter);
app.use("/api", productsRouter);
app.use("/api", cartRouter);
app.use("/api", contactRouter);
app.use("/api", orderRouter);
app.use("/api", AllProductsRouter);

/* =======================================================
   🔥 PROMETHEUS METRICS ENDPOINT
======================================================= */

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

/* =======================================================
   🔥 FRONTEND SERVE (PRODUCTION)
======================================================= */

// app.use(express.static(path.join(__dirname, "..", "Frontend", "dist")));

// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "..", "Frontend", "dist", "index.html")
//   );
// });

/* =======================================================
   🔥 START SERVER
======================================================= */

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

module.exports = app;