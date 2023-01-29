import React from "react";
import ModalForm from "../../components/ModalForm/ModalForm";

const Billings = () => {
  return (
    <div>
      <section className="mb-5">
        <div className="navbar bg-base-100 border">
          <div className="flex-1">
            <p className="text-lg font-semibold text-slate-800 mr-10">
              Billings
            </p>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered input-sm rounded-none w-[400px]"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="modalForm"
              className="bg-[#005525] text-white px-3 py-1 hover:cursor-pointer"
            >
              Add New Bill
            </label>
          </div>
        </div>
      </section>

      <section>
        <div className="overflow-x-auto">
          <table className="table w-full table-compact">
            <thead>
              <tr>
                <th className="border">Billing ID</th>
                <th className="border">Full Name</th>
                <th className="border">Email</th>
                <th className="border">Phone</th>
                <th className="border">Paid Amount</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">Billing ID</td>
                <td className="border">Full Name</td>
                <td className="border">Email</td>
                <td className="border">Phone</td>
                <td className="border">Paid Amount</td>
                <td className="border w-40">
                  <button>Edit</button>
                  <span className="mx-4">|</span>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <ModalForm />
    </div>
  );
};

export default Billings;
