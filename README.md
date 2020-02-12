# Desafio-RegEx

<p>O Programa deve ler o input abaixo em forma de string:</p>

<br>
<p>100000  ATIVO             1000  300   500   1200</p>
<p>110000  ATIVO CIRCULANTE  500   100   200   600</p>
<p>111000  DISPONIVEL        200   100   50    150</p>
<p>200000  PASSIVO           800   250   450   1000</p>


<p>E retornar um array de objetos conforme abaixo:</p>

<br>

<p>[{</p>
<p>description: 'ATIVO', // string</p>
<p>lassifier: '100000',      // string</p>
<p>openingBalance: 1000, // number</p>
<p>debit: 300,           // number</p>
<p>credit: 500,          // numbe</p>
<p>finalBalance: 1200,   // number</p>
<p>parent: null          // null or string of the parent classifier</p>
<p>},</p>
