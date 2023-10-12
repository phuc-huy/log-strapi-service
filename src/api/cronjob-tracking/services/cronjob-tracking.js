'use strict';

/**
 * cronjob-tracking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cronjob-tracking.cronjob-tracking');
