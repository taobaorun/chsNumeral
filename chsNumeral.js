

(function(){
    var chsNumeral;

    function ChsNumeral(number){
        this._value = number;
    }

    function toFixed(value,precision){
        var power = Math.pow(10,precision);
        return Math.round(value * power)/power.toFixed(precision);
    }
    function formatNumber (num,precision) {
                    var abs = Math.abs(num);
                    var  abbreviations={
                                tenThousand: '万',
                                hundrenMillion: '亿',
                                trillion: '兆'
                            }
                    var abbr='';
                    value = num;
                    if (abs >= Math.pow(10, 12) ) {
                            // trillion
                            abbr = abbr + abbreviations.trillion;
                            value = value / Math.pow(10, 12);
                        
                    } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 8) ) {
                        // hundrenMillion
                        abbr = abbr + abbreviations.hundrenMillion;
                        value = value / Math.pow(10, 8);
                    } else if (abs < Math.pow(10, 8) && abs >= Math.pow(10, 4) ) {
                        // 10thousand
                        abbr = abbr + abbreviations.tenThousand;
                        value = value / Math.pow(10, 4);
                    }
                    return toFixed(value,precision) + abbr;

    }

    chsNumeral = function(input){

        return new ChsNumeral(Number(input))

    }

    chsNumeral.fn = ChsNumeral.prototype = {

        precision:function(precision){
            return formatNumber(this._value,precision);
        }
    };

    if ( typeof ender ==='undefined') {
        this['chsNumeral'] = chsNumeral;
    };

}).call(this)