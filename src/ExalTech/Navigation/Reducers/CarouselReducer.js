export const CarouselReducer = (state = [
  {
    CarouselImage: "logo192.png",
    carouselTitle: "first slide",
    carouselDesc: "abcvvv",
  },{
    CarouselImage: "logo192.png",
    carouselTitle: "first slide",
    carouselDesc: "abcvvv",
  },
],
action)=>{
    if(action.type === "ADD_CAROUSEL"){
        return[...state,action.payload];

    }else return state;
};
