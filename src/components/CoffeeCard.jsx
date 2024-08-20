

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, details, category, taste, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Details: {details}</p>
                </div>
                <div className="justify-end space-y-4">
                    <button className="btn">View</button>
                    <br />
                    <button className="btn">Edit</button>
                    <br />
                    <button className="btn">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;