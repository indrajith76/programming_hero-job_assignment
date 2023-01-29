import React from "react";

const ModalForm = () => {
  return (
    <div>
      <input type="checkbox" id="modalForm" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modalForm"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form>
            <label className="" htmlFor="fullName">Full Name</label>
            <input
              className="input input-bordered w-full mt-1 mb-3"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
            />
            <label className="" htmlFor="email">Email</label>
            <input
              className="input input-bordered w-full mt-1 mb-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <label className="" htmlFor="phone">Phone</label>
            <input
              className="input input-bordered w-full mt-1 mb-3"
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
            />
            <label className="" htmlFor="payableAmount">Payable Amount</label>
            <input
              className="input input-bordered w-full mt-1 mb-3"
              type="text"
              name="payableAmount"
              id="payableAmount"
              placeholder="Enter your Payable amount"
            />

            <button
              className="flex mx-auto bg-[#005525] mt-5 px-10 py-2 text-white rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
