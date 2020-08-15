const currencies = [
  {
    name: "Afghani",
    code: "AFN",
  },
  {
    name: "Lek",
    code: "ALL",
  },
  {
    name: "Algerian Dinar",
    code: "DZD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Kwanza",
    code: "AOA",
  },
  {
    name: "Argentine Peso",
    code: "ARS",
  },
  {
    name: "Armenian Dram",
    code: "AMD",
  },
  {
    name: "Aruban Florin",
    code: "AWG",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Azerbaijanian Manat",
    code: "AZN",
  },
  {
    name: "Bahamian Dollar",
    code: "BSD",
  },
  {
    name: "Bahraini Dinar",
    code: "BHD",
  },
  {
    name: "Taka",
    code: "BDT",
  },
  {
    name: "Belarussian Ruble",
    code: "BYN",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Belize Dollar",
    code: "BZD",
  },
  {
    name: "Ngultrum",
    code: "BTN",
  },
  {
    name: "Indian Rupee",
    code: "INR",
  },
  {
    name: "Boliviano",
    code: "BOB",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Convertible Mark",
    code: "BAM",
  },
  {
    name: "Pula",
    code: "BWP",
  },
  {
    name: "Norwegian Krone",
    code: "NOK",
  },
  {
    name: "Brazilian Real",
    code: "BRL",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Brunei Dollar",
    code: "BND",
  },
  {
    name: "Bulgarian Lev",
    code: "BGN",
  },
  {
    name: "Burundi Franc",
    code: "BIF",
  },
  {
    name: "Cabo Verde Escudo",
    code: "CVE",
  },
  {
    name: "Canadian Dollar",
    code: "CAD",
  },
  {
    name: "Unidad de Fomento",
    code: "CLF",
  },
  {
    name: "Chilean Peso",
    code: "CLP",
  },
  {
    name: "Yuan Renminbi",
    code: "CNY",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "Colombian Peso",
    code: "COP",
  },
  {
    name: "Congolese Franc",
    code: "CDF",
  },
  {
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    name: "Costa Rican Colon",
    code: "CRC",
  },
  {
    name: "Netherlands Antillean Guilder",
    code: "ANG",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Czech Koruna",
    code: "CZK",
  },
  {
    name: "Danish Krone",
    code: "DKK",
  },
  {
    name: "Djibouti Franc",
    code: "DJF",
  },
  {
    name: "Dominican Peso",
    code: "DOP",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Egyptian Pound",
    code: "EGP",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Nakfa",
    code: "ERN",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Ethiopian Birr",
    code: "ETB",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Falkland Islands Pound",
    code: "FKP",
  },
  {
    name: "Danish Krone",
    code: "DKK",
  },
  {
    name: "Fiji Dollar",
    code: "FJD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Dalasi",
    code: "GMD",
  },
  {
    name: "Lari",
    code: "GEL",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Ghana Cedi",
    code: "GHS",
  },
  {
    name: "Gibraltar Pound",
    code: "GIP",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Danish Krone",
    code: "DKK",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    name: "Guinea Franc",
    code: "GNF",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Hong Kong Dollar",
    code: "HKD",
  },
  {
    name: "Indian Rupee",
    code: "INR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Yen",
    code: "JPY",
  },
  {
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "Won",
    code: "KRW",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Rand",
    code: "ZAR",
  },
  {
    name: "Swiss Franc",
    code: "CHF",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Mexican Peso",
    code: "MXN",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Rand",
    code: "ZAR",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Norwegian Krone",
    code: "NOK",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Russian Ruble",
    code: "RUB",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Singapore Dollar",
    code: "SGD",
  },
  {
    name: "Netherlands Antillean Guilder",
    code: "ANG",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Rand",
    code: "ZAR",
  },
  {
    name: "Euro",
    code: "EUR",
  },
  {
    name: "Norwegian Krone",
    code: "NOK",
  },
  {
    name: "Swedish Krona",
    code: "SEK",
  },
  {
    name: "Swiss Franc",
    code: "CHF",
  },
  {
    name: "New Taiwan Dollar",
    code: "TWD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    name: "Turkish Lira",
    code: "TRY",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    name: "UAE Dirham",
    code: "AED",
  },
  {
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "US Dollar",
    code: "USD",
  },
  {
    name: "Euro",
    code: "EUR",
  },
];

const staticData = [
  { from: "USD", to: "EUR", rate: 0.843, inverseRate: 1.186 },
  { from: "USD", to: "JPY", rate: 106.787, inverseRate: 0.00936 },
  { from: "USD", to: "GBP", rate: 0.763, inverseRate: 1.311 },
  { from: "USD", to: "AUD", rate: 1.393, inverseRate: 0.718 },
  { from: "USD", to: "CAD", rate: 1.321, inverseRate: 0.757 },
  { from: "USD", to: "CNY", rate: 6.943, inverseRate: 0.144 },
  { from: "USD", to: "CHF", rate: 0.9091, inverseRate: 1.1 },
  { from: "USD", to: "MXN", rate: 22.28, inverseRate: 0.0449 },
  { from: "USD", to: "SGD", rate: 1.371, inverseRate: 0.729 },
  { from: "USD", to: "KRW", rate: 1183.91, inverseRate: 0.000845 },
  { from: "USD", to: "NZD", rate: 1.522, inverseRate: 0.657 },
  { from: "USD", to: "HKD", rate: 7.75, inverseRate: 0.129 },
  { from: "USD", to: "SEK", rate: 8.656, inverseRate: 0.116 },
  { from: "USD", to: "TRY", rate: 7.314, inverseRate: 0.137 },
  { from: "USD", to: "INR", rate: 74.824, inverseRate: 0.0134 },
  { from: "USD", to: "RUB", rate: 73.346, inverseRate: 0.0136 },
  { from: "USD", to: "NOK", rate: 8.863, inverseRate: 0.113 },
  { from: "USD", to: "BRL", rate: 5.374, inverseRate: 0.186 },
  { from: "USD", to: "ZAR", rate: 17.394, inverseRate: 0.0575 },
  { from: "USD", to: "TWD", rate: 29.414, inverseRate: 0.034 },
  { from: "USD", to: "AED", rate: 3.673, inverseRate: 0.272 },
  { from: "USD", to: "AFN", rate: 77.15, inverseRate: 0.013 },
  { from: "USD", to: "ALL", rate: 104.949, inverseRate: 0.00953 },
  { from: "USD", to: "AMD", rate: 485.17, inverseRate: 0.002061 },
  { from: "USD", to: "ANG", rate: 1.795, inverseRate: 0.557 },
  { from: "USD", to: "AOA", rate: 589.02, inverseRate: 0.0017 },
  { from: "USD", to: "ARS", rate: 73.107, inverseRate: 0.0137 },
  { from: "USD", to: "AUD", rate: 1.393, inverseRate: 0.718 },
  { from: "USD", to: "AWG", rate: 1.8, inverseRate: 0.556 },
  { from: "USD", to: "AZN", rate: 1.692, inverseRate: 0.591 },
  { from: "USD", to: "BAM", rate: 1.651, inverseRate: 0.6057 },
  { from: "USD", to: "BDT", rate: 84.922, inverseRate: 0.0118 },
  { from: "USD", to: "BGN", rate: 1.652, inverseRate: 0.6053 },
  { from: "USD", to: "BHD", rate: 0.377, inverseRate: 2.653 },
  { from: "USD", to: "BIF", rate: 1930, inverseRate: 0.000518 },
  { from: "USD", to: "BND", rate: 1.37, inverseRate: 0.73 },
  { from: "USD", to: "BOB", rate: 6.903, inverseRate: 0.145 },
  { from: "USD", to: "BRL", rate: 5.374, inverseRate: 0.186 },
  { from: "USD", to: "BSD", rate: 1, inverseRate: 1 },
  { from: "USD", to: "BTN", rate: 74.816, inverseRate: 0.0134 },
  { from: "USD", to: "BWP", rate: 11.706, inverseRate: 0.0854 },
  { from: "USD", to: "BYN", rate: 2.462, inverseRate: 0.4062 },
  { from: "USD", to: "BZD", rate: 2.015, inverseRate: 0.496 },
  { from: "USD", to: "CAD", rate: 1.321, inverseRate: 0.757 },
  { from: "USD", to: "CDF", rate: 1949, inverseRate: 0.000513 },
  { from: "USD", to: "CHF", rate: 0.9091, inverseRate: 1.1 },
  { from: "USD", to: "CLF", rate: 0.0288, inverseRate: 34.722 },
  { from: "USD", to: "CLP", rate: 794.398, inverseRate: 0.00126 },
  { from: "USD", to: "CNY", rate: 6.943, inverseRate: 0.144 },
  { from: "USD", to: "COP", rate: 3761.26, inverseRate: 0.000266 },
  { from: "USD", to: "CRC", rate: 595.093, inverseRate: 0.00168 },
  { from: "USD", to: "CVE", rate: 93.89, inverseRate: 0.01065 },
  { from: "USD", to: "CZK", rate: 22.041, inverseRate: 0.0454 },
  { from: "USD", to: "DJF", rate: 177.953, inverseRate: 0.00562 },
  { from: "USD", to: "DKK", rate: 6.281, inverseRate: 0.159 },
  { from: "USD", to: "DOP", rate: 58.63, inverseRate: 0.0171 },
  { from: "USD", to: "DZD", rate: 128.288, inverseRate: 0.00779 },
  { from: "USD", to: "EGP", rate: 15.925, inverseRate: 0.0628 },
  { from: "USD", to: "ERN", rate: 15, inverseRate: 0.0667 },
  { from: "USD", to: "ETB", rate: 35.5, inverseRate: 0.0282 },
  { from: "USD", to: "EUR", rate: 0.843, inverseRate: 1.186 },
  { from: "USD", to: "FJD", rate: 2.129, inverseRate: 0.47 },
  { from: "USD", to: "FKP", rate: 0.763, inverseRate: 1.311 },
  { from: "USD", to: "GBP", rate: 0.763, inverseRate: 1.311 },
  { from: "USD", to: "GEL", rate: 3.085, inverseRate: 0.324 },
  { from: "USD", to: "GGP", rate: 0.763, inverseRate: 1.311 },
  { from: "USD", to: "GHS", rate: 5.765, inverseRate: 0.173 },
  { from: "USD", to: "GIP", rate: 0.763, inverseRate: 1.311 },
  { from: "USD", to: "GMD", rate: 51.799, inverseRate: 0.0193 },
  { from: "USD", to: "GNF", rate: 9615, inverseRate: 0.000104 },
];
