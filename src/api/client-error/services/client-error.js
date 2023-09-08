'use strict';

/**
 * client-error service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-error.client-error');
