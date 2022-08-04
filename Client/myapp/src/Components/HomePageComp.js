import { Routes, Route } from 'react-router-dom'
import Login from './LoginComp'
import MenuComp from './MenuComp'
import MoviesComp from './MoviesComp'
import SubscriptionsComp from './SubscriptionsComp'
import GetAllMoviesComp from './GetAllMoviesComp'
import AllMembersComp from './AllMembersComp'
import AddMemberComp from './AddMemberComp'
import AddMovieComp from './AddMovieComp'

export default function HomePage() {

    return <div>

        <h1>Movies-Subscriptions Web-Site</h1>

        <Routes>
            <Route path='/menu' element={<MenuComp />}  >
                <Route path='movies' element={<MoviesComp />}>
                    <Route path='addMovie' element={<AddMovieComp />} />
                    <Route path='allMovies' element={<GetAllMoviesComp />} />
                </Route>
                <Route path='subscriptions' element={<SubscriptionsComp />}>
                    <Route path='allMembers' element={<AllMembersComp />} />
                    <Route path='addMember' element={<AddMemberComp />} />
                </Route>
            </Route>
            <Route path='/' element={<Login />} />
        </Routes>
    </div>
}

