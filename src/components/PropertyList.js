import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllProperties } from '../actions/propertyActions';
import '../styles/PropertyList.css';
import manhattan from "../assets/manhattan-dusk.jpg";
import locicon from "../assets/location.png";
import roomicon from "../assets/building.png";
import bedicon from "../assets/double-bed.png";
import bathicon from "../assets/bathtub.png";
import sqfticon from "../assets/move.png";
import heart from "../assets/love.png";
import PopularLabel from './PopularLabel';

const PropertyList = ({ properties, selectedCity, fetchAllProperties }) => {
  const [visibleProperties, setVisibleProperties] = useState(3);

  useEffect(() => {
    
    fetchAllProperties();
  }, [fetchAllProperties]);

  const filteredProperties = properties.filter((property) => {
  
    if (!selectedCity) {
      return true;
    }
    
    return property.city === selectedCity;
  });

  const handleShowMore = () => {
    setVisibleProperties((prevVisibleProperties) => prevVisibleProperties + 3);
  };

  return (
    <div className="property-list">
      <div className="property-row">
        {filteredProperties.slice(0, visibleProperties).map((property) => (
          <div key={property.id} className="property-card">
          
            <Link to={`/property/${property.id}`}>
              <div className="property-image">
                <img className='image' src={manhattan} alt={property.name} />
                <>
                <div className="rent-label">
                  {property.forRent ? 'For Rent' : 'For Sale'}
                </div>
                <img className='img heart-icon' src={heart}  alt={property.name}/>
                </>
                
              </div>
              
              <div className="property-details">
              {property.isPopular && <PopularLabel />}
                <div className="location-container">
                  <img className="icons1" src={locicon} alt={property.name} />
                  <h5 className="location-text">{property.location}</h5>
                </div>
                <h3 className='name'>{property.name}</h3>
                <div className="room-details">
                  <div className="room-info">
                    <img className="icons" src={roomicon} alt={property.name} />
                    <span>{property.rooms} Room</span>
                  </div>
                  <div className="room-info">
                    <img className="icons" src={bedicon} alt={property.name} />
                    <span>{property.bedrooms} Bed</span>
                  </div>
                  <div className="room-info">
                    <img className="icons" src={bathicon} alt={property.name} />
                    <span>{property.bathrooms} Bath</span>
                  </div>
                  <div className="room-info1">
                    <img className="icons" src={sqfticon} alt={property.name} />
                    <span>{property.squareFeet} Sft</span>
                  </div>
                </div>
                <div className='proper-foot'>
                <div className='pri'>
                <p className='price'> ${property.price}
                </p>
                <span className='mon'>/month</span>
                </div>
                
                <button className='butt'>Read More</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='centre-button'>
      {visibleProperties < filteredProperties.length && (
        <button onClick={handleShowMore}>
          Show More
        </button>
      )}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.propertyReducer.properties,
  selectedCity: state.cityReducer.selectedCity,
});

export default connect(mapStateToProps, { fetchAllProperties })(PropertyList);






