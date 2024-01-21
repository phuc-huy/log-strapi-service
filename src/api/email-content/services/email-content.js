'use strict';

/**
 * email-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-content.email-content');
