'use strict';

/**
 * get-to-work service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::get-to-work.get-to-work');
