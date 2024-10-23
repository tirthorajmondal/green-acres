
const estates = [
    {
        id: 1,
        title: 'Fertile Agricultural Land',
        segment: 'Agricultural Land',
        price: '$500,000',
        status: 'For Sale',
        area: '5000 acres',
        location: 'Green Valley, CA',
        facilities: ['Irrigation System', 'Fenced', 'Water Sources'],
        image: 'https://img.freepik.com/premium-photo/expansive-view-fertile-land-lease-promising-development-agriculture-opportunities-concept-agricultural-land-opportunities_918839-139216.jpg?w=996',
    },
    {
        id: 2,
        title: 'Serene Vineyard',
        segment: 'Vineyard',
        price: '$750,000',
        status: 'For Sale',
        area: '200 acres',
        location: 'Napa Valley, CA',
        facilities: ['Wine Production Facility', 'Fenced', 'Irrigation'],
        image: 'https://img.freepik.com/premium-photo/expansive-view-fertile-land-lease-promising-development-agriculture-opportunities-concept-agricultural-land-opportunities_918839-139216.jpg?w=996',
    },
    {
        id: 3,
        title: 'Spacious Ranch',
        segment: 'Ranch',
        price: '$1,200,000',
        status: 'For Sale',
        area: '1000 acres',
        location: 'Texas, USA',
        facilities: ['Barn', 'Fencing', 'Water Access'],
        image: 'https://img.freepik.com/premium-photo/expansive-view-fertile-land-lease-promising-development-agriculture-opportunities-concept-agricultural-land-opportunities_918839-139216.jpg?w=996',
    },
];

const EstateCard = ({ estate }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={estate.image} alt={estate.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold text-forest-green">{estate.title}</h3>
                <p className="text-gray-600">{estate.segment}</p>
                <p className="text-gray-900 font-semibold mt-2">Price: {estate.price}</p>
                <p className={`mt-2 ${estate.status === 'For Sale' ? 'text-green-600' : 'text-red-600'}`}>{estate.status}</p>
                <p className="text-gray-700 mt-2">Area: {estate.area}</p>
                <p className="text-gray-700 mt-2">Location: {estate.location}</p>
                <div className="mt-4">
                    <h4 className="font-semibold">Facilities:</h4>
                    <ul className="list-disc list-inside">
                        {estate.facilities.map((facility, index) => (
                            <li key={index} className="text-gray-600">{facility}</li>
                        ))}
                    </ul>
                </div>
                <button className="mt-4 bg-golden-yellow text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition">View Property</button>
            </div>
        </div>
    );
};

const EstateSection = () => {
    return (
        <section className="py-16 px-4 bg-soft-beige">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-forest-green">Explore Our Land Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {estates.map((estate) => (
                        <EstateCard key={estate.id} estate={estate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EstateSection;
