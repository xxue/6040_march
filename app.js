const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
// const nodemailer = require("nodemailer")

// const users = require("./routes/users")
// i added this, your own file module, relative path to the file
const articles = require("./routes/articles")
const staticPages = require("./routes/static_pages")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")))
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/articles", articles)
app.use("/", staticPages)

// app.use("/:static_page", staticPages)


app.use(function(req, res, next) {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  res.status(err.status || 500)
  res.render("error")
})

const PORT = 3500
app.listen(PORT, function() { console.log("Listening on port: " + PORT)})
module.exports = app


// if ("bill" === "bill") {
//   return 5
// } else {
//   return 6
// }
//
// "bill" === "bill"
//   ? 5
//   : 6


// function bill (name) { return name }
// const bill = name => name

// function bill (name, age) { return [name, age] }
// const bill = (name, age) => [name, age]
// const bill = (name, age) => {return [name, age]}
