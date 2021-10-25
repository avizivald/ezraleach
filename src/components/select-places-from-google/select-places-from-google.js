
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { connect } from 'react-redux';
import './SelectPlacesFromGoogle.css';
import { Redirect } from 'react-router';

import FormInput from '../form-input/form-input'
const SelectPlacesFromGoogle = (props)=>{
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
      latitude: null,
      longitude: null
  
    });  
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        if (props.onSelect) {
          props.onSelect(latLng)
        }
      };
    

    return (
      props.currentUser ? 
        <div className='main-PlacesAutocomplete'>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <div className="lat-lon">
                <p>קו רוחב   Latitude: {coordinates.lat}</p>
                <p>קו אורך   Longitude: {coordinates.lng}</p>
              </div>
    
                <FormInput {...getInputProps({ label:"Address"})} />
    
                <div>
                  {loading ? <div>...loading</div> : null}
    
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      fontSize : "15px",
                      margin: "0 20%"
                    };
    
                    return (
                      <div   key={suggestion.placeId}{...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
         

        </div>
        :
        <Redirect to="/" /> 
        // <SignInAndSignUpPage/>
      );
} 

const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(SelectPlacesFromGoogle);