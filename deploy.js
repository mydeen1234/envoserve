const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "u888684621.envoserve",
  password: "Envo@54321", // optional, prompted if not set
  host: "82.112.232.146",
  port: 21,
  localRoot: __dirname + "/out",
  remoteRoot: "/public_html", // adjust to your webroot
  include: ["*", "**/*"],
  deleteRemote: false,
  forceVerbose: true
};

ftpDeploy.deploy(config)
  .then(res => console.log("Finished:", res))
  .catch(err => console.error("Error:", err));
