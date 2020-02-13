function extract(str){
    const regex = /(\d*)(\D+\s*?)(\d*\s*)(\d*\s*)(\d*\s*)(\d*\s*)/gs;
    let m;
    let description,classifier,openingBalance,debit,credit,finalBalance,parent=null
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {

            groupIndex == 1? classifier = match.trim():0
            groupIndex == 2? description = match.trim():0
            groupIndex == 3? openingBalance = parseInt(match.trim()):0
            groupIndex == 4? debit = parseInt(match.trim()):0
            groupIndex == 5? credit = parseInt(match.trim()):0
            groupIndex == 6? finalBalance= parseInt(match.trim()):0  
            
        });
        array.push({
            description,
            classifier,
            openingBalance,
            debit,
            credit,
            finalBalance,
            parent,
        })
    }
}

let array=[]

const str = `100000  ATIVO             1000  300   500   1200
110000  ATIVO CIRCULANTE  500   100   200   600
111000  DISPONIVEL        200   100   50    150
200000  PASSIVO           800   250   450   1000`;

extract(str)

console.log(array)