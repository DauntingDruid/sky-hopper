import axios from "axios";

export const geoOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8750d13cc7msha7a775dcb26d786p1c01dajsn266c39e683e6',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
}
export const geoURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

//places autocomplete api
export const searchGeoPlace = async (place: string) =>{
    try {
      const places = await axios.get(`${geoURL}/cities?namePrefix=${place}`,geoOptions)
      return places
    } catch (error) {
      console.log("error getting geo-location :",error)
    }
  }