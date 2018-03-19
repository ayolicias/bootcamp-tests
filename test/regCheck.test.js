describe(' regCheck', function(){
    it('check if a regNO is for MP ', function(){
      assert.equal(regCheck('CY189-012', 'CY'), isMP);

    });

    it('check if a regNO is for GP ', function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'), isGP);
    });
    });
