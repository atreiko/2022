import axios from 'axios'
import { searchCatAPI, breedsCatAPI } from './constants'

export default class PostService {

  static async searchCat() {
    const response = await axios.get(searchCatAPI)
    return response.data
  }  

  static async getBreeds(limit) {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=0`)
    return response.data 
  }

  static async getBreedId(id) {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${id}`)
    return response.data
  }

  static async getBreedsWithoutLimits() {
    const response = await axios.get (`https://api.thecatapi.com/v1/breeds`)
    return response.data
  }

}