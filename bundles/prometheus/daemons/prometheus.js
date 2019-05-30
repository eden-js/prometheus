
// Require dependencies
const config     = require('config');
const Daemon     = require('controller');
const promBundle = require('express-prom-bundle');

/**
 * Build notification controller
 */
class PrometheusDaemon extends Daemon {
  /**
   * Construct notification controller
   */
  constructor() {
    // Run super
    super();
    
  }


  // ////////////////////////////////////////////////////////////////////////////
  //
  // INITIALIZE METHODS
  //
  // ////////////////////////////////////////////////////////////////////////////

  /**
   * builds notification controller
   */
  static initialize(eden) {
    // on render
    eden.pre('eden.router.create', (app) => {
      // add prometheus middleware
      const metricsMiddleware = promBundle(config.get('prometheus'));

      // use metrics
      app.use(metricsMiddleware);
    });
  }
}

/**
 * Export prometheus daemon
 *
 * @type {PrometheusDaemon}
 */
module.exports = PrometheusDaemon;
