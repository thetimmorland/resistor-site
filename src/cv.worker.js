import cv from "./opencv";

export default () => {
  cv["onRuntimeInitialized"] = () => {
    self.addEventListener("message", e => {
      if (!e) return;
      postMessage(cv.getBuildInformation());
    });
  };
};
