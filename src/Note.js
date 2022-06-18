/* export const Melo = ({ content, date, txamount, fee }) => { */
export const Melo = (props) => {
  console.log("props", props);

  const { content, date } = props;

  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

export const getNumber = () => 2;
