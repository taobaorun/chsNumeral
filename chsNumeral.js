function chsNumeral (num) {

 	var abs = Math.abs(num);
	var  abbreviations={
	            tenThousand: 'wan',
	            hundrenMillion: 'yi',
	            trillion: 'zao'
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
                return value + abbr;

}