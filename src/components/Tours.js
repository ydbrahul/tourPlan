import Card from './Card.js';
function Tours({tours,removeTour}){
    return (
        <div>
            <div className="heading">
                <h2>Tour Plan</h2>
            </div>
            <div>
                 {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                 }
            </div>
        </div>


    );
}
export default Tours;