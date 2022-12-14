import { toHaveStyle } from '@testing-library/jest-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList } from '../../store/actions';
import './MovieItem.css';

const MovieItem =(props)=> {

    const {my_list} = useSelector(state=>state.mylist) 

        const { Title, Year, Poster } = props;
        const dispatch = useDispatch()

        const addToList = ()=>{
            dispatch(addMovieToList(props))
           
        }

        const isTrue = my_list.some((item)=>{
            return item.imdbID===props.imdbID
        })
        const favoriteFilm = ()=>{
            dispatch(addMovieToList(props))
            
        }
      
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button disabled={isTrue} type="button" className="movie-item__add-button" onClick={addToList}>Elave et</button>
                    
                </div>
                <img onClick={favoriteFilm}    className='movie-star ' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA8VJREFUWEetWIt1EzEQnK3ApgLHFQQqSFJBTAWYCgIVQCrAVJCkgjgVYCogqQBTAXYF4o20d7f6nc6A3gs2+qxGszu7mwhOHALA+X9qB0cXm7fx9P8b/4bF46gC+nsSCidPAGoANQxly/3EGYBvSvMVgP2plFvTJ7qs+NR7AO8UxAOAdTnOag/WefMRHJcEaWY0PteRQHZ+JowsBdgHcw1fVe6N7U22IRC4jQNuEkBfAXwouW1KKE1wWTW25srOnEwIXEfyAcASAD/HR4uhYX3KW/AZwCe98Zd+LtRNHwFs6rFQz2ETGLKHI6BU00JX32vI3ClNXFvWY6j+4AhQKr88Gfc71gDuFMwRkLmqgm6a6S6CpAKbI5f9JA9Fdp8BnOvMLeDdx2HdyD1vmmgSJQaGYoiXGp+XxthrAD54Aaff/eoRwBkgB2WIgU53zfQsGXtW++H7MHY6/32YojjMEGDngIt+qiqwfscDBOskh9lE2cpEZGMHOGb4nhuL6QDBjBfUvGjmqSyylcqbLJGJLuBbXiPLPFMEZIO128NEtzMX7yHYpz1I5QHM5PwhEwx82r9OEEbBX5J9CoqvJaUDE4UyMkEXK1VmF4tkhnN8bBQlJf/koARXcDhMuLjk7sFeMHAU4NLFQe7VlTM03BiD8m7CW6OaVmx066xrX8xmxh6ZsYpLGKqb9qBMSTkI3FX+spoBuQdc15rw9S8OYDrJ65wJg6I14xoqiX6eqW+LCa/gyjUgd6aveQHBCA7FfrwFqNdgqB+k+FGRk3JVThyMSamxriIYPiwerWpfJt6fsiXBd4Vjtv0JwRlc1LxNKORdUI9Kxy9uIbhWqjVvRD1Q/pZgcy/AQpmjIGjHozX9U1K5fM4yLaweGHzvJ3wV11uXITH2GOjOTkXsg7bG3RsBbnRrtZPM81DNuQEoff9Dt9g0z3TPFoSA7CAgsshHrAR4VEDaI4WtY6WppTKbj54UgM+6Aswrv8ASDEERnDO3s7Ud+TUpr/YlRZrqLbeAO4dgldQyAuVI6xQBvYLgQg3XW1s1kLYfei4iNARmFmfeAl1IBre6TObuBZiVuk2Be3K5iyMfVqWoFzBOfpfTAcgKwaRFl2fIasJW/6JR+bdyg02IXTAeXWjKgprqw7Nl1NmFUpB/ZRhAxbwyJMTwQMNKrJMhW0TzJbZsD17U99grWSK6foWlwLzMFJ/q34p602Rro/9jca0ordR+NPxw2rJlPf5e+4tX5LKRP4v1OEarjEaZLQvDA8oyTVNkK6jbhLQRxjay/THQP/DAPDswMTM3AAAAAElFTkSuQmCC"/>
            </article>
        );
    
}
 
export default MovieItem;