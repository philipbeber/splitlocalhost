// Import the SDK
var SplitFactory = require("@splitsoftware/splitio").SplitFactory;

// Instantiate the SDK
var factory = SplitFactory({
  core: {
    authorizationKey: "localhost",
  },
  features: {
    "my-feature": "on",
  },
});

// Get the client instance you'll use
var client = factory.client();
console.log("created the client");

// Set a callback to listen for the SDK_READY event, to make sure the SDK is properly loaded before asking for a treatment
client.on(client.Event.SDK_READY, function () {
  console.log("SDK_READY");
  var treatment = client.getTreatment("CUSTOMER_ID", "my-feature");
  console.log(treatment);
});

client.on(client.Event.SDK_UPDATE, () => {
  console.log("SDK_UPDATE");
});

client.once(client.Event.SDK_READY_TIMED_OUT, () => {
  console.log("SDK_READY_TIMED_OUT");
});

client.once(client.Event.SDK_READY_FROM_CACHE, () => {
  console.log("SDK_READY_FROM_CACHE");
});
