import axios from "axios"

const getCatGif = async (
    urls: string[], 
    setUrls: React.Dispatch<React.SetStateAction<string[]>>
  ): Promise<void> => {
  let apiResp: {url: string}
  try {
    let { data } = await axios.get(process.env.REACT_APP_BACKEND_URL + "/cats/cat-gif")
    apiResp = data
    urls.push(apiResp.url)
    setUrls(urls)
  } catch (error) {
    throw new Error(`Error fetching image`)
  }
}

export {
  getCatGif
}