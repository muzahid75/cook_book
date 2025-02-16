import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate();
    const data = useLoaderData(); // Ensure data is an array
    const { category } = useParams();

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (data.length > 0) {  // Prevent issues when data is undefined
            if (category) {
                const filteredByCategory = data.filter(coffee => coffee.category === category);
                setCoffees(filteredByCategory);
            } else {
                setCoffees(data.slice(0, 6));
            }
        }
    }, [category, data]);

    return (
        <div className="max-w-7xl mx-auto bg-cover bg-center my-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                {coffees.length > 0 ? (
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
                ) : (
                    <p className="text-center col-span-3 text-gray-500">No coffees available.</p>
                )}
            </div>
            <button className="btn btn-warning mt-5" onClick={() => navigate('/coffees')}>
                View all
            </button>
        </div>
    );
};

export default CoffeeCard;
