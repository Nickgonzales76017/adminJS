'use strict';

/**
 * local-table router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::local-table.local-table');
