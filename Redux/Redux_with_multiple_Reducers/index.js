import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import {setUserDetails, removeUserDetails} from "./redux/user"

store.dispatch(setUserDetails({
    firstName: "Joe",
    lastName: "Schmoe",
    id: 1,
    email: "joe@schmoe.com"
}))
store.dispatch(setUserDetails({
    email: "joe.schmoe@gmail.com"
}))
store.dispatch(removeUserDetails())



