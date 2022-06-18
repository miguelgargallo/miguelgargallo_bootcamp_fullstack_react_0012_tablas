export const Melo = (props) => {
  const { currencies = [], domain, wallet } = props;

  return (
    <li>
      <p>{domain}</p>
      <small>
        <time>{wallet}</time>
      </small>
      {currencies.map((currency) => (
        <small key={currency}>{currency}</small>
      ))}
    </li>
  );
};
