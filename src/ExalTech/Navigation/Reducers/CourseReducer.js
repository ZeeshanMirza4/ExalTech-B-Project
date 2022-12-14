export const CourseReducer = (
    state = [
        {courseImg:"https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw",
    couseTitle:"HTML",
courseDesc:"hyper text markup language",
},
    ],
     action) => {
  if (action.type === "ADD_COURSES") {
    return [...state, action.meriMarzi];
  } else return state;
};
