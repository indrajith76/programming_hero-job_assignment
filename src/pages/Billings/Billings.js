import React from "react";

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
            <button className="bg-[#00421d] text-white px-3 py-1">
              Add New Bill
            </button>
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
    </div>
  );
};

export default Billings;
