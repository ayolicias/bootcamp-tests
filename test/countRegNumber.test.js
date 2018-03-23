describe(' countRegNumber', function(){
    it('counts regCount for regNumbers function', function(){
      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 812328,CJ 812328'), 5);
    });

    it('check regNumbers for regNumbers function', function(){
      assert.equal(countRegNumber('CY 523519,CJ 812328,CJ 812328,CJ 812328'), 4);
    });
    });
