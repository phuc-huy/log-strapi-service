'use strict';

/**
 * tracking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tracking.tracking');
