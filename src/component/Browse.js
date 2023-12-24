import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'

const Browse = () => {
  useNowPlayingMovies(); // this is the hook 

  return (
    <div><Header/></div>
  )
}

export default Browse