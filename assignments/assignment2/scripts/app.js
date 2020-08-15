const main = () => {
  const allCurrencies = Array.from(
    new Set(["USD", ...staticData.map((x) => x.to)])
  );

  renderForm({
    allCurrencies,
    from: "USD",
    to: "BDT",
    rate: staticData.find((x) => x.to === "BDT").rate,
    inverseRate: staticData.find((x) => x.to === "BDT").inverseRate,
  });

  document.getElementById("from").focus();
};

main();
