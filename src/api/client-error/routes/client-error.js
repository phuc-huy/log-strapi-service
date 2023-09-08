'use strict';

/**
 * client-error router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-error.client-error');
