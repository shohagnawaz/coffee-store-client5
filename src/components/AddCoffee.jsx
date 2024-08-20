import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      details,
      category,
      taste,
      photo,
    };
    console.log(newCoffee);
    // send to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Form row name & quantity */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Coffee Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                className="input input-bordered w-full"
                placeholder="Available Quantity"
              />
            </label>
          </div>
        </div>
        {/* Form row supplier & taste */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                className="input input-bordered w-full"
                placeholder="Supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                className="input input-bordered w-full"
                placeholder="Taste"
              />
            </label>
          </div>
        </div>
        {/* Form row category & details */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                className="input input-bordered w-full"
                placeholder="Category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                className="input input-bordered w-full"
                placeholder="Details"
              />
            </label>
          </div>
        </div>
        {/* Form row photo */}
        <div className="form-control mb-8 w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Photo URL"
            />
          </label>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
