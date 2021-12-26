
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MediaWrapper from './components/MediaWrapper';
import Spinner from './components/Spinner';
import { getMediadataAsyncAction } from './redux/asyncActions';

function App() {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.mediadataReducer.isLoading);
  const data = useSelector(state => state.mediadataReducer.data);

  useEffect(() => {
    if(data.length === 0){
      dispatch(getMediadataAsyncAction())
    }
  }, [])

  return (
    <div className="App">
      {isLoading ? 
        <Spinner />
      :
        <MediaWrapper />
      }
      
    </div>
  );
}

export default App;
