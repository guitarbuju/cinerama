import popcorn2 from "../assets/‎popcorn2.png";
import { useForm } from "react-hook-form";
import { usePopcornStore } from "../../store";
import { useState } from "react";

const Modal = () => {
  const combo = [
    { title: "Tiny Popcorn + Beverage  10$", price: 10 },
    { title: "Medium Popcorn + Beverage  15$", price: 15 },
    { title: "Large Popcorn + Beverage + Candy  18$", price: 18 },
    { title: "XL Popcorn + Beverage + Candy  20$", price: 20 },
  ];
  const [comboQuantities, setComboQuantities] = useState(
    Array(combo.length).fill(0)
  );
  const { handleSubmit, reset } = useForm();

  const closeModal = () => {
    window.my_modal_1.close();
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
    closeModal();
    setPop(data);
    setPop(totalAmount);
  };

  const setPop = usePopcornStore((state) => state.setPopcorn);

  const totalAmount = combo.reduce((acc, item, index) => {
    const quantity = comboQuantities[index];
    return acc + quantity * item.price;
  }, 0);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box "
          style={{
            backgroundImage: "linear-gradient(315deg, #7a7adb 0%, #170e13 74%)",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mx-24">
            <h1 className="text-white">Get it NOW...only 15$</h1>
            <img src={popcorn2} className="w-80" />
          </div>
          <ul className="text-white text-xs text-left mt-8">
            {combo.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="grid grid-cols-2 gap-10 mx-24">
                  <span className="col-span-1 w-60">{item.title}</span>
                 
                  <input
                    className="col-span-1 w-10 h-5 rounded text-purple-900 text-center mx-20"
                    type="number"
                    value={comboQuantities[index]}
                    onChange={(e) => {
                      const newQuantities = [...comboQuantities];
                      newQuantities[index] = parseInt(e.target.value);
                      setComboQuantities(newQuantities);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="modal-action">
            <p className="text-white">Total Amount: ${totalAmount}</p>
            <input
              type="submit"
              className="btn btn-secondary btn-sm"
              value="Yeahh!!"
            />
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
