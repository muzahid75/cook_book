import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    // Function to sort by rating in descending order
    const handleSortByRating = () => {
        const sortedCoffees = [...data].sort((a, b) => b.rating - a.rating);
        setCoffees(sortedCoffees);
    };
    const handleSortByPopularity = () => {
        const sortedCoffees = [...data].sort((a, b) => a.popularity - b.popularity);
        setCoffees(sortedCoffees);
    };

    return (
        <>
            <div className="flex justify-between items-center max-w-7xl mx-auto mb-5">
                <div>
                    <h2 className="text-3xl font-bold">Sort by popularity and rating</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <button onClick={handleSortByPopularity} className="btn btn-warning" >
                        Sort by popularity
                    </button>
                    <button onClick={handleSortByRating} className="btn btn-warning">Sort by Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 max-w-7xl mx-auto bg-cover bg-center">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
                }
            </div>
        </>
    );
};

export default Coffees;
