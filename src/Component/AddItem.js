import React, { useEffect, useState } from "react";

const AddItem = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const added = form.added.value;
    const agree = form.agree.checked;

    const select = {
      name: name,
      selectData: added,
      agree: agree,
    };
    console.log(select);
    fetch("https://challenge-server-one.vercel.app/selectadd", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(select),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("select item added successfully");
        }
      });
  };
  return (
    <div className="container mx-auto text-white pb-28">
      <div className="w-full mx-auto">
        <h3 className="font-bold text-2xl text-center pt-10">
          Please enter your name and pick the Sectors <br /> you are currently
          involved in.
        </h3>
        <br />
        <br />

        <form onSubmit={handlesubmit}>
          <h3 className="text-2xl font-semibold py-1">Name:</h3>
          <input
            name="name"
            type="text"
            className="bg-slate-800 p-2 rounded w-[60%]"
          />
          <br />
          <br />
          <h3 className="text-2xl font-semibold py-1"> Sectors:</h3>
          <select
            name="added"
            multiple
            size="15"
            className="p-5 w-full bg-slate-800 rounded overflow-x-hidden"
          >
            <option value="1" className="font-semibold text-lg">
              Manufacturing
            </option>

            {data.map((d) => (
              <option className="py-1 w-60 rounded" value={d}>
                &nbsp;&nbsp;&nbsp;&nbsp; {d}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input name="agree" type="checkbox" className="w-4 h-4 mr-1" />{" "}
          <span className="text-md font-semibold">Agree to terms</span>
          <br />
          <br />
          <input type="submit" value="Save" className="btn btn-primary px-14" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
