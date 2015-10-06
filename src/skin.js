/* global
    UserAccounts: false,
    UALog: false
*/
'use strict';

// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading skin.js');

// Apply SUI skin to UserAccounts' modules
UserAccounts.startup(function addSkin() {
  UALog.trace('Adding Twitter Bootstrap skin to UserAccounts');
  UserAccounts.applySkin('bootstrap', {
    /*
    uaForm: {
      container: function() {
        return 'ui large fluid segment';
      }
    },
    */
    error: {
      container: 'alert alert-danger',
    },
    message: {
      container: 'alert alert-info',
    },
    oauth: {
      button: 'btn btn-block',
    },
    separator: {
      container: 'text-center text-uppercase',
    },
    success: {
      container: 'alert alert-success',
    },
    title: {
      h2: 'text-center',
    },
  });
});
