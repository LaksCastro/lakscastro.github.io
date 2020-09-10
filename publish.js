const gh = require("gh-pages");

gh.publish(
  "./dist",
  { 
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/LaksCastro/lakscastro.github.io',
    branch: "master",
  },
  function (e) {
    if (e) {
      return console.log(e);
    }

    console.log("Success Publish...");
  }
);
