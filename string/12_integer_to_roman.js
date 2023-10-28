var intToRoman = function(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
};

console.log(intToRoman(3993));

function numtowords(num){
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const places = ['', 'Hundred','Thousand', 'Million', 'Billion'];

    return ones[Math.floor(num / 100)] + places[Math.floor(num / 100)];

}

console.log(numtowords(223));

function test(n) {
    if (n < 0)
      return false;
	 single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
	 double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
	 below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
	if (n === 0) return 'Zero'
	function translate(n) {
		word = ""
		if (n < 10) {
			word = single_digit[n] + ' '
		}
		else if (n < 20) {
			word = double_digit[n - 10] + ' '
		}
		else if (n < 100) {
			rem = translate(n % 10)
			word = below_hundred[Math.floor(n / 10) - 2] + ' ' + rem
		}
		else if (n < 1000) {
			word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100)
		}
		else if (n < 1000000) {
			word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000)
		}
		else if (n < 1000000000) {
			word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000)
		}
		else {
			word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000)
		}
		return word
	}
	 result = translate(n) 
	return result.trim()+'.'
}

console.log(test(10));