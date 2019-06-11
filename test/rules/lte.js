const assert = require('assert');

const Validator = require('../../index');


let r = {};


describe('lte', function () {

    it('validation should pass with greater seed', async () => {

        const v = new Validator(
            { min: '20', max: '25' },
            {
                min: 'required|integer|lte:max',
                max: 'required|integer'
            }
        );

        const matched = await v.check();

        assert.equal(matched, true);

    });

    it('validation should pass with equal', async () => {

        const v = new Validator(
            { min: '20', max: '20' },
            {
                min: 'required|integer|lte:max',
                max: 'required|integer'
            }
        );

        const matched = await v.check();

        assert.equal(matched, true);

    });

    it('validation should fail', async () => {

        const v = new Validator(
            { min: '30', max: '25' },
            {
                min: 'required|integer|lte:max',
                max: 'required|integer'
            }
        );

        const matched = await v.check();

        assert.equal(matched, false);

    });


});
