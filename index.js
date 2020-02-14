function ParseFloat(string){
    string = parseFloat(string.trim().replace(/([^\d,])+/gim, '').replace(',','.'))
    return string
}

function clearClassifier(string){
    string = string.replace(/\d*$/gim,'').trim()
    return string
}

function extract(str){
    const regex = /^(\s*[\d.,]*\s*(\d{10})?)((\D*)(\d{7}[-]\d{1})?)((\s*[\d.,DC]*[\s*DC]?)[\D]?)(\s*[\d.,DC]*[\s*DC]?)(\s*[\d.,DC]*[\s*DC]?)((\s*[\d.,DC]*[\s*DC]?)[\D]?)/mg;
    let m;
    let description,classifier,openingBalance,debit,credit,finalBalance,parent=null
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {

            groupIndex == 1? classifier = ParseFloat(clearClassifier(match)):0
            groupIndex == 2? parent = match:0
            groupIndex == 3? description = match.trim():0                  
            groupIndex == 6? openingBalance = ParseFloat(match):0
            groupIndex == 8? debit = ParseFloat(match):0
            groupIndex == 9? credit =ParseFloat(match):0
            groupIndex == 11? finalBalance =ParseFloat(match):0
            
        });            
            array.push({
                description,    
                parent,                     
                classifier,
                openingBalance,
                debit,
                credit,
                finalBalance,              
        })
    }
}

let array=[]

const str1 = `100000  ATIVO             1000  300   500   1200
110000  ATIVO CIRCULANTE  500   100   200   600
111000  DISPONIVEL        200   100   50    150
200000  PASSIVO           800   250   450   1000`;

const str2 = `1				  ATIVO							1.120.807,67D		527.081,41					464.716,15			1.183.172,93D					
																										
																										
																										
1.1				     Ativo Circulante							130.288,57D		527.081,41					464.716,15			192.653,83D					
                                                                                                       
1.1.1				        Caixa							4.000,98D		104.653,71					108.648,69			6,00D					
                                                                                                       
1.1.1.01				           Caixa							4.000,98D		104.653,71					108.648,69			6,00D					
                                                                                                       
1.1.2				        Bancos							44.750,72D		282.256,32					268.764,52			58.242,52D					
                                                                                                       
1.1.2.02				           Bradesco Conta: 9999999-9							1,00D		203.835,57					203.835,57			1,00D					
                                                                                                       
1.1.2.03				           Bradesco Conta: 9999999-9							1,00D		64.845,40					64.845,40			1,00D					
                                                                                                       
1.1.2.04				           Bradesco Conta Poupanca: 9999999-9							5.694,85D		8.502,20					6,78			14.190,27D					
                                                                                                       
1.1.2.05				           Bradesco Conta Poupanca:9999999-9							39.053,87D		5.073,15					76,77			44.050,25D					
                                                                                                       
1.1.3				        Aplicaçoes Financeiras							81.536,87D		140.171,38					87.302,94			134.405,31D					
                                                                                                       
1.1.3.02				           Bradesco Aplicaçoes 9999999-9							87.827,84D		52.134,00					12.741,40			127.220,44D					
                                                                                                       
1.1.3.03				           Bradesco Aplicaçoes 9999999-9							6.290,97C		88.037,38					74.561,54			7.184,87D					
                                                                                                       
1.2				     REALIZAVEL A LONGO PRAZO							12.368,24D		0					0			12.368,24D					
                                                                                                       
1.2.1				        REALIZAVEL A LONGO PRAZO							12.368,24D		0					0			12.368,24D					
                                                                                                       
1.2.1.02				           Emprestimos a Associados							12.368,24D		0					0			12.368,24D					
                                                                                                       
1.3				     PERMANENTE							978.150,86D		0					0			978.150,86D					
                                                                                                       
1.3.1				        IMOBILIZADO							976.650,86D		0					0			976.650,86D					
                                                                                                       
1.3.1.04				           Moveis e Utensilios							95.539,50D		0					0			95.539,50D					
                                                                                                       
1.3.1.05				           Instalacoes							245.600,50D		0					0			245.600,50D					
                                                                                                       
1.3.1.06				           Computadores e Perifericos							7.687,41D		0					0			7.687,41D					
                                                                                                       
1.3.1.08				           Sede Campestre Sindicato							627.823,45D		0					0			627.823,45D					
                                                                                                       
1.3.3				        Intangivel							1.500,00D		0					0			1.500,00D					
                                                                                                       
1.3.3.03				           Marcas e Patentes							1.500,00D		0					0			1.500,00D					
                                                                                                       
2				  PASSIVO							1.080.167,44C		0					0			1.080.167,44C					
                                                                                                       
                                                                                                       
                                                                                                       
2.3				     PATRIMONIO SOCIAL							1.080.167,44C		0					0			1.080.167,44C					
                                                                                                       
2.3.2				        Superavit ou Deficit							1.080.167,44C		0					0			1.080.167,44C					
                                                                                                       
2.3.2.01				           Superavit							1.114.092,00C		0					0			1.114.092,00C					
                                                                                                       
2.3.2.02				           Deficit							33.924,56D		0					0			33.924,56D					
                                                                                                       
3				  DESPESAS E CUSTOS							219.398,02D		99.112,37					0			318.510,39D					
                                                                                                       
                                                                                                       
                                                                                                       
3.1				     Despesas Gerais							194.940,27D		85.047,98					0			279.988,25D					
                                                                                                       
3.1.1				        Despesas com Pessoal							39.005,75D		16.091,84					0			55.097,59D					
                                                                                                       
3.1.1.01				           Salarios							17.161,50D		6.677,80					0			23.839,30D					
                                                                                                       
3.1.1.03				           Fgts							1.757,55D		857,24					0			2.614,79D					
                                                                                                       
3.1.1.04				           Previdencia Social - Inss							7.334,76D		3.541,07					0			10.875,83D					
                                                                                                       
3.1.1.06				           Ferias							5.242,10D		0					0			5.242,10D					
                                                                                                       
3.1.1.08				           Adiantamento de Salário.							3.250,00D		2.872,13					0			6.122,13D					
                                                                                                       
3.1.1.09				           Vale Transporte.							1.419,00D		843,6					0			2.262,60D					
                                                                                                       
3.1.1.10				           Ir Retido na Fonte							500,84D		0					0			500,84D					
                                                                                                       
3.1.1.11				           Alimentação de Funcionários.							2.340,00D		1.300,00					0			3.640,00D					
                                                                                                       
3.1.2				        Despesas Administrativas e de Estrutur							100.740,67D		61.210,48					0			161.951,15D					
                                                                                                       
3.1.2.01				           Consumo de Energia Eletrica							1.596,58D		706,67					0			2.303,25D					
                                                                                                       
3.1.2.02				           Despesas com Telefone							648,40D		668,4					0			1.316,80D					
                                                                                                       
3.1.2.03				           Consumo de Agua do Amazonas							`

str3=`1	*** Ativo ***	82997,66	D		247726,89	240377,5		90347,05	D
11	Ativo Circulante	32573,59	D		247726,89	239574,01		40726,47	D
111	Disponível	24059,92	D		200259,03	187061,24		37257,71	D
11101	Caixa Geral	3758,78	D		145995,84	146317,86		3436,76	D
111010001	Caixa Fixo	3758,78	D		145995,84	146317,86		3436,76	D
11102	Depósitos Bancários à Vista	19316,93	D		54213,19	40743,38		32786,74	D
111020001	Santander	19316,93	D		54213,19	40743,38		32786,74	D
11103	Aplicação de Liquidez Imediata	984,21	D		50	0		1034,21	D
111030001	Poupança Santander	984,21	D		50	0		1034,21	D
113	Clientes	6420,06	D		38956,9	43635,46		1741,5	D
11304	Cartão de Crédito	6420,06	D		38956,9	43635,46		1741,5	D
113040001	Cartão de Crédito	6420,06	D		38956,9	43635,46		1741,5	D
114	Outros Créditos	1854,84	D		6941,02	7411,14		1384,72	D
11403	Créditos de Funcionários	1854,84	D		6941,02	7411,14		1384,72	D
114030001	Adiantamento de Salários	451,54	D		5556,3	6007,84		0	 
114030002	Adiantamento de Férias	1403,3	D		1384,72	1403,3		1384,72	D
116	Estoques	238,77	D		1569,94	1466,17		342,54	D
11603	Estoque de Mercadorias	238,77	D		1569,94	1466,17		342,54	D
116030001	Mercadorias Restaurante	238,77	D		1569,94	1466,17		342,54	D
13	Ativo Permanente	39576,15	D		0	803,49		38772,66	D
133	Imobilizado	39576,15	D		0	803,49		38772,66	D
13301	Bens Em Operação	56024,12	D		0	0		56024,12	D
133010005	Móveis e Utensílios	13933,65	D		0	0		13933,65	D
133010006	Instalações Diversas	1695,16	D		0	0		1695,16	D
133010007	Veículos	36500,61	D		0	0		36500,61	D
133010011	Equipamentos de Proc.De Dados	3894,7	D		0	0		3894,7	D
13302	Deprec.Amortizacao e Exaustão Acumulada	16447,97	C		0	803,49		17251,46	C
133020004	Móveis e Utensílios	2526,29	C		0	116,11		2642,4	C
133020005	Instalações Diversas	268,47	C		0	14,13		282,6	C
133020006	Veículos	12561,35	C		0	608,34		13169,69	C
133020010	Equipamentos Proc.De Dados	1091,86	C		0	64,91		1156,77	C
14	Compensações Ativas	10847,92	D		0	0		10847,92	D
141	Contas de Compensações	10847,92	D		0	0		10847,92	D
14101	Bens Recebidos em Comodato	10847,92	D		0	0		10847,92	D
141010001	Bens Recebidos em Comodato	10847,92	D		0	0		10847,92	D
2	*** Passivo ***	82997,66	C		33628,08	30977,47		80347,05	C
21	Passivo Circulante	15008,36	C		26566,24	28434,36		16876,48	C
211	Fornecedores	840,36	C		747,8	2565,72		2658,28	C
21101	Fornecedores Nacionais	840,36	C		747,8	2565,72		2658,28	C`

str4=`10000  1000000000      A T I V O                                        5.869.359,63   13.988.798,89  14.478.791,43   5.379.367,09

11000  1100000000       CIRCULANTE                                      4.701.531,18   13.988.798,89  14.443.148,60   4.247.181,47

11100  1101000000        CAIXA E EQUIVALENTES DE CAIXA                    254.315,84    1.502.516,19   1.449.152,65     307.679,38
11110  1101010000         CAIXA                                           254.315,84    1.502.516,19   1.449.152,65     307.679,38

11200  1102000000        BANCOS CONTA MOVIMENTO                            42.541,31    4.404.940,62   4.382.382,38      65.099,55
11202  1102010100          BANCO DO BRASIL SA                              31.863,66    4.095.200,13   4.079.980,54      47.083,25
11212  1102010200          BRADESCO SA                                          1,00       29.541,04      29.541,04           1,00
11203  1102010300          DEPOSITOS BLOQUEADOS                            10.676,65      280.199,45     272.860,80      18.015,30

11300  1103000000        APLICACOES FINANCEIRAS                         1.023.089,20    1.301.945,90   1.645.374,78     679.660,32
11302  1103010200          B.DO BRASIL SA - BB RF CP AUT                  906.447,85    1.301.849,61   1.617.191,74     591.105,72
11312  1103010300          BRADESCO                                       116.641,35           96,29      28.183,04      88.554,60

11401  1106000000        CONTAS A RECEBER                                 805.615,48    2.443.445,35   2.618.639,90     630.420,93
11411  1106010000         CLIENTES DIVERSOS                               805.615,48    2.443.445,35   2.618.639,90     630.420,93

11500  1108000000        IMPOSTOS A RECUPERAR                             184.079,12      219.588,86     215.558,27     188.109,71
11523  1108010100          COFINS A RECUPERAR                                   0,00      178.902,53     173.219,25       5.683,28
11515  1108010200          COFINS RETIDO                                       25,65            1,37          27,02           0,00
11513  1108010300          CONTRIB.SOCIAL TRIMESTRAL                        2.329,53          127,45       1.264,66       1.192,32
11505  1108010400          CONTRIBUICAO SOCIAL RETIDA                           6,24            0,00           6,24           0,00
11501  1108010500          I.C.M.S.                                        89.294,31            0,83          82,71      89.212,43
11508  1108010600          I.C.M.S. S/IMOBILIZADO                          83.157,46            0,00       3.381,20      79.776,26
11511  1108010700          I.R.P.J. TRIMESTRAL                              7.231,88            0,00           0,00       7.231,88
11503  1108010800          I.R.R.F.                                         2.023,28        1.756,39           0,00       3.779,67
11522  1108010900          P.I.S A RECUPERAR                                    0,00       38.800,29      37.566,42       1.233,87
11510  1108011000          P.I.S RETIDO                                        10,77            0,00          10,77           0,00

11700  1110000000        ADIANTAMENTOS                                    231.193,75    2.164.088,62   1.972.323,81     422.958,56
11702  1110010100          EMPREGADOS                                           0,00       17.609,68      17.283,75         325,93
11703  1110010200          FERIAS                                          12.501,71        5.212,47      12.444,39       5.269,79
11701  1110010300          FORNECEDORES                                   218.692,04    2.141.266,47   1.942.595,67     417.362,84

11800  1111000000        ESTOQUES                                       2.159.468,32    1.952.273,35   2.159.468,32   1.952.273,35
11804  1111010000         MERCADORIAS PARA REVENDA                      2.159.468,32    1.952.273,35   2.159.468,32   1.952.273,35

11950  1115000000        DESPESAS DO EXERC.SEGUINTE                         1.228,16            0,00         248,49         979,67
11951  1115010000         PREMIOS DE SEGUROS                                1.228,16            0,00         248,49         979,67

12000  1200000000       NAO-CIRCULANTE                                  1.167.828,45            0,00      35.642,83   1.132.185,62
`

extract(str1)
extract(str2)
extract(str3)
extract(str4)


console.log(array)