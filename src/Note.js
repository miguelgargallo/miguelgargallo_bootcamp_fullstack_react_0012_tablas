export const Note = (props) => {
  console.log({ props });

  const { categories = [], content, date } = props;

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
