

const CoffeeCard = ({ coffee }) => {
    const { name, quentity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                <h2 className="card-title">Name:{name}</h2>
                <p>{supplier}</p>
                <p>{quentity}</p>
                <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <button className="btn">Eidt</button>
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;