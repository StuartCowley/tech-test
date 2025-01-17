import axios from "axios";

const getImages = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            const imageResults = response.data.collection.items;
            let parsedImages = imageResults.filter(imageResult => imageResult.data[0].media_type === "image");
            const images = parsedImages.map(image => image.links[0].href);
            return images;

            console.log(parsedImages);
        })
        .catch((err)=>{
            console.log(err);
        });
    
    }
};

export default getImages;