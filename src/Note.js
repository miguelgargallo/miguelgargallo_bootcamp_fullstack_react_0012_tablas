export const Melo = ({ content, date, txamount, fee }) => {
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
      <p>{txamount}</p>
      <p>{fee}</p>
    </li>
  );
};

export const getNumber = () => 2;
