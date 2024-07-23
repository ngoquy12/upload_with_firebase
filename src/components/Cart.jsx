import React, { useMemo, useState } from "react";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const totalPrice = useMemo(() => {
    return products.reduce((prev, current) => prev + current.price, 0);
  }, [products]);

  const handleAdd = () => {
    const newProduct = {
      name: name,
      price: price,
    };

    const newListProducts = [...products, newProduct]; // spread operator

    setProducts(newListProducts);

    setName("");

    setPrice(0);
  };
  return (
    <div>
      <h2>Tổng tiền: {totalPrice}</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Nhập tên"
      />
      <input
        onChange={(e) => setPrice(+e.target.value)}
        value={price}
        type="number"
        placeholder="Nhập giá"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
