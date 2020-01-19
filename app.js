const http = require("http")
const fs = require("fs")

const PORT = 3000

fs.readFile("./index.html", function(err, html) {
   if (err) throw err

   http
      .createServer(function(req, res) {
         res.writeHeader(200, { "Content-Type": "text/html" })
         res.write(html)
         res.end()
      })
      .listen(PORT)
})

/*const http = require("http")
const port = 3000 //|| process.env.PORT
const fs = require("fs")

const server = http.createServer(function(req, res) {
   res.write("Hello")

   res.writeHead(200, { "Content-type": "text/html" })
   fs.readfile("./index.html", (err, data) => {
      if (err) {
         res.writeHead(404)
         res.write("Erreur: Fichier introuvable")
      } else {
         res.write(data)
      }
      res.end()
   })
})

server.listen(
   (port,
   err => {
      if (err) {
         console.log("Une erreur est survenue", err)
      } else {
         console.log(`Server is listenning on port: ${port}`)
      }
   })
)*/
