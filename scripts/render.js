const renderForm = (data) => {
  const { allCurrencies, from, to } = data;

  const html = `
    <div>
      <label id="fromCurrencyLabel" for="from">${
        (currencies.find((c) => c.code === from) &&
          currencies.find((c) => c.code === from).name) ||
        ""
      }</label>
      <br>
      <input id="from" type="number" value="" placeholder="Type ${from} amount" onkeyup="calculate(event)" autocomplete="off"></input>
      <select id="currencyFromSelector" onchange="calculate(event)">
        ${allCurrencies
          .map(
            (c) =>
              `<option value="${c}" ${
                from === c ? "selected" : ""
              }>${c}</option>`
          )
          .join()}
      </select>
    </div>
    <div>
      <label id="toCurrencyLabel" for="to">${
        (currencies.find((c) => c.code === to) &&
          currencies.find((c) => c.code === to).name) ||
        ""
      }</label>
      <br>
      <input id="to" type="number" value="" placeholder="Type ${to} amount" onkeyup="calculate(event)" autocomplete="off"></input>
      <select id="currencyToSelector" onchange="calculate(event)">
        ${allCurrencies
          .map(
            (c) =>
              `<option value="${c}" ${to === c ? "selected" : ""}>${c}</option>`
          )
          .join()}
      </select>
    </div>
  `;

  document.querySelector("main #form").innerHTML = html;
};
