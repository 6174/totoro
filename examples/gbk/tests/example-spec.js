define(function(require) {
    var expect = require('expect')
    var simple = require('simple')

    describe('GBK �����׼�', function() {
        it('A GBK ��������', function() {
            expect(simple()).to.be('A simple sample.')
        })
    })
})
