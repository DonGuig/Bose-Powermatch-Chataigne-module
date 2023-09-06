function init() {

}

function moduleParameterChanged(param) {

}

function moduleValueChanged(value) {
  script.log(value.name + " value changed");

  if (!value.isParameter()) {
    // if it is a trigger
    script.log("it is a trigger");
    if (value.name === "enableStandby") enable_standby();
    else if (value.name === "disableStandby") disable_standby();
  }
}

function dataReceived(data) {
  //If mode is "Lines", you can expect data to be a single line String
  script.log("Data received : " + data);
}

function sendToAmplifier(message) {
  script.log("sending message : " + message);
  local.send(message + "\r");
}

// Here are the callback functions for the commands

function enable_standby() {
  sendToAmplifier("SY S");
}

function disable_standby() {
  sendToAmplifier("SY N");
}
