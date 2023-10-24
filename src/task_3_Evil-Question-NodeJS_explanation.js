
/**
 *  The Promise _promise is immediately rejected with the provided error.
 *  Then will not excute as it only exceute once the promise resolve.
 * promise explicity rejected so catch will execute here .triggerUncaughtException(err, true  fromPromise) 
 * The .catch() callback will be executed because it handles errors. The error message 'BOOOM'.
 */
const _promise = Promise.reject(new Error("BOOOM"));
_promise.then(() => console.log(".then"));
_promise.catch(console.log);
