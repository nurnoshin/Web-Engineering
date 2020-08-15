const calculate = (event) => {
  const form = document.getElementById("form");

  const fromElement = form.querySelector("#from");

  const toElement = form.querySelector("#to");

  const currencyFromSelector = form.querySelector("#currencyFromSelector");

  const currencyToSelector = form.querySelector("#currencyToSelector");

  const from = currencyFromSelector.value;
  const to = currencyToSelector.value;

  const id = event.target.id;

  if (id === "currencyToSelector" || id === "currencyFromSelector") {
    document.getElementById("fromCurrencyLabel").innerHTML = currencies.find(
      (c) => c.code == from
    ).name;

    document.getElementById("toCurrencyLabel").innerHTML = currencies.find(
      (c) => c.code == to
    ).name;

    fromElement.placeholder = `Type ${from} amount`;
    toElement.placeholder = `Type ${to} amount`;
  }

  if (!fromElement.value) {
    return;
  }

  const fromAmount = parseFloat(fromElement.value);
  const toAmount = parseFloat(toElement.value);

  if (from === to) {
    toElement.value = "1";
    fromElement.value = "1";

    return;
  }

  let selectedData1 = staticData.find((x) => x.to === to);

  if (!selectedData1 && to !== "USD") {
    selectedData1 = staticData.find((x) => x.from === to);
  }

  let selectedData2 = staticData.find((x) => x.from === "USD" && x.to === from);

  if (!selectedData2) {
    selectedData2 = staticData.find((x) => x.from === "USD" && x.to === to);
  }

  if (to === "USD") {
    const found = staticData.find((x) => x.to === from);

    toElement.value = (found.inverseRate * fromAmount).toFixed(3).toString();

    return;
  }

  if (id === "from") {
    if (selectedData2.to !== selectedData1.to) {
      toElement.value = (
        selectedData1.rate *
        selectedData2.inverseRate *
        fromAmount
      )
        .toFixed(3)
        .toString();
    } else {
      toElement.value = (selectedData1.rate * fromAmount).toFixed(3).toString();
    }
  } else if (id === "to") {
    if (selectedData2.to !== selectedData1.to) {
      fromElement.value = (
        selectedData1.inverseRate *
        selectedData2.rate *
        toAmount
      )
        .toFixed(3)
        .toString();
    } else {
      fromElement.value = (selectedData1.inverseRate * toAmount)
        .toFixed(3)
        .toString();
    }
  } else {
    if (selectedData2.to !== selectedData1.to) {
      toElement.value = (
        selectedData1.rate *
        selectedData2.inverseRate *
        fromAmount
      )
        .toFixed(3)
        .toString();
    } else {
      toElement.value = (selectedData1.rate * fromAmount).toFixed(3).toString();
    }
  }

  document.getElementById(
    "toCurrencyLabel"
  ).innerHTML = document.getElementById("toCurrencyLabel").innerHTML =
    currencies.find((c) => c.code == to).name +
    ` = <b>${parseFloat(toElement.value).toLocaleString()}</b>/-`;

  document.getElementById(
    "fromCurrencyLabel"
  ).innerHTML = document.getElementById("fromCurrencyLabel").innerHTML =
    currencies.find((c) => c.code == from).name +
    ` = <b>${parseFloat(fromElement.value).toLocaleString()}</b>/-`;
};
