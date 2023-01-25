import React, { useEffect, useState } from "react";

const GetItem = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://challenge-server-one.vercel.app/myItem")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const selectData = form.selected.value;
    const name = form.name.value;
    // console.log(name, selectData);

    const textInput = {
      name,
      selectData,
    };

    fetch(`https://challenge-server-one.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textInput),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("https://challenge-server-one.vercel.app/myItem")
          .then((res) => res.json())
          .then((data) => setItem(data));
        alert("Data Updated!");
      });
  };

  return (
    <div className="py-10">
      {item.map((data) => {
        return (
          <form
            onSubmit={(e) => handleUpdate(e, data._id)}
            className="flex justify-center items-center gap-6 text-white py-1"
          >
            <label className="label">
              <span className="label-text text-lg font-semibold">name :</span>
            </label>
            <input
              className="text-center px-5 py-1 bg-slate-800 rounded"
              type="text"
              name="name"
              defaultValue={data.name}
            />
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Selected options :
              </span>
            </label>
            <input
              className="text-center px-5 py-1 bg-slate-800 rounded"
              type="text"
              name="selected"
              defaultValue={data.selectData}
            />
            <label className="label">
              <span className="label-text text-lg font-semibold">agreed :</span>
            </label>
            <input
              className="text-center px-2 py-1 bg-slate-800 rounded"
              type="text"
              value={data.agree}
            />
            <input type="submit" value="" />
          </form>
        );
      })}
    </div>
  );
};

export default GetItem;
