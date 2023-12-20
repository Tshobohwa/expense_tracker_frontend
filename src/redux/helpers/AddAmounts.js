const addAmount = (transactions) => {
  return transactions.reduce(
    (amount, transaction) => amount + transaction.amount,
    0
  );
};

export default addAmount;
