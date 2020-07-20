const gh = require("gh-pages");

gh.publish(
  "./dist",
  {
    branch: "master",
  },
  function (e) {
    if (e) {
      return console.log(e);
    }

    console.log("Success Publish...");
  }
);
