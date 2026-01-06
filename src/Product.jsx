function Product({ title, price, onSale }) {
  return (
    <>
      <main>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{onSale ? "On Sale" : "Not on Sale"}</p>
      </main>
    </>
  );
}
export default Product;
