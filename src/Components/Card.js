import {useState} from 'react';
function Card({id,image,info,price,name,removeTour}){
    
    const [readMore,setReadMore] = useState(false);
    const description =readMore?info:`${info.substring(0,200)}....`;
    function readMoreHandler(){
        setReadMore(!readMore);
    }

    
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className='tour-info'>
            <div className="tour-details">
                <h4 className="tour-price">${price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="desctiption">
                {description}
                <span className="read-more" onClick={readMoreHandler}>
                    {readMore?`Show Less`:`Read More`};
                </span>
            </div>
            
            </div>
            <button className='btn' onClick= {() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;