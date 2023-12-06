'use strict';

/**
 * message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message',
    ({ strapi }) => ({


        async voiceFlow(ctx) {
            console.log('ctx.request.body', ctx.request.body);
            const body = JSON.parse(ctx.request.body);
            console.log('body', body);

            if (!body) return ctx.badRequest('Missing body');
            if (!body.data) return ctx.badRequest('Missing body data');

            const data = body.data


            try {
                const createdMsg = await strapi.entityService.create('api::message.message', {
                    data: data,
                });

                console.log('createdMsg', createdMsg);
                return ctx.send('SUCCESS');

            } catch (error) {
                return ctx.badRequest('ERROR');
            }

        }
    })
);
