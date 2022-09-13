'use strict';

/**
 * local-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-table.local-table');
