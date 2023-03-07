import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Users from './Component/Users';
import { getUsers } from './Redux/action';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getData(1)
  }, [])

  const getData = async (no) => {
    try {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${no}&per_page=10`)
      // console.log(data)
      dispatch(getUsers(data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='App'>
      <Users />
      <nav aria-label="..." className='d-flex justify-content-end'>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={() => getData(1)}>1</a></li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => getData(2)}>2 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" onClick={() => getData(3)}>3</a></li>
                    <li className="page-item"><a className="page-link" onClick={() => getData(4)}>4</a></li>
                </ul>
            </nav>
    </div>
  );
}

export default App;
