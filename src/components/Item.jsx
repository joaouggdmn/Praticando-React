import PropTypes from "prop-types";

function Item({ marca = "Marca Não Informada", anoLancamento = 0 }) {
  return (
    <>
      <li>
        {marca} - {anoLancamento}
      </li>
      <p>teste</p>
    </>
  );
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  anoLancamento: PropTypes.number.isRequired,
};

export default Item;
