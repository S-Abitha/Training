/**
 * @NApiVersion 2.x
 * @NScriptType restlet
 */
define(['N/runtime', 'N/search', 'N/task', 'N/record', 'N/file'],
function (runtime, search, task, record, file) {
    function get() {
        try {
            var recLoad = record.load({
                type: record.Type.SALES_ORDER,
                id: 190590
            });
            log.debug('recLoad', recLoad);
            var salesRep = recLoad.getValue({
                fieldId: 'salesrep'
            });
            log.debug('salesRep', salesRep);
            recLoad.setValue({
                fieldId: 'memo',
                value: salesRep
            });
            return salesRep;
        } catch (e) {
            log.error('Error', e);
            throw e;
        }
    }
    return {
        get: get
    };
});
