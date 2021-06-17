import "@nativescript/globals";

const context: Worker = self as any;

context.onmessage = msg => {
  setTimeout(() => {
    console.log("Inside TS worker...");
    console.log(msg);
    context.postMessage("waited " + (msg.data as number) * 1000 + " seconds");
    (<any>global).postMessage("TS Worker");
  }, (msg.data as number) * 1000)
};
