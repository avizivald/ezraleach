
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import FormInput from '../form-input/form-input'

export default function SelectPlacesFromGoogle(props){
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
      latitude: null,
      longitude: null
  
    });  
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        // console.log('latLng latLng',latLng);
        // console.log('results results',results);
        // console.log(results[0].address_components[0].long_name);
        // setAddress(results[0].address_components[0].long_name);
        setAddress(value);
        setCoordinates(latLng);
        if (props.onSelect) {
          props.onSelect(latLng)
        }
      };
    

    return (
        <div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng}</p>
    
                <FormInput {...getInputProps({ label:"Address"})} />
    
                <div>
                  {loading ? <div>...loading</div> : null}
    
                  {suggestions.map(suggestion => {
                    // console.log("suggestion ",suggestion);
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      fontSize : "15px"
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
      );
} 