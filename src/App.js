import "./css/App.css";
import Card from "./components/card";
import { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import Pagination from "./components/Pagination";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from './redux/actions';
import Header from "./components/header";
import store from "./redux/store";
import { data } from "./data";

function App() {
  
  const { pageNumber } = useParams();
  const dispatch = useDispatch();

  const itemsPerPage =6;
  const [totalItem, setTotalItem] = useState('60');
  const currentPage = useSelector((state) => state.currentPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const searchQuery = useSelector((state) => state.searchQuery);

  const [filteredData, setFilteredData] = useState(data);

  // Update Redux state when the URL parameter changes
  useEffect(() => {
    if (pageNumber && !isNaN(pageNumber)) {
      dispatch(setCurrentPage(parseInt(pageNumber, 10)));
    }
  }, [dispatch, pageNumber]);

  
  useEffect(() => {
    // Filter data based on searchQuery
    const filtered = data.filter(
      (item) =>
        item.Brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.car_model.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setTotalItem (filtered.length);

    // Slice the filtered data based on pagination
    const slicedData = filtered.slice(startIndex, endIndex);
    console.log(store);

    // Update filteredData state
    setFilteredData(slicedData);
  }, [currentPage, searchQuery, startIndex, endIndex]);

  
  return (
    <div className="App">
      
      <Header/>

      <div id="cardContainer">
  {filteredData.length === 0 ? (
    <p>No items found.</p>
  ) : (
    filteredData.map((item, i) => (
      <Card className="card" data={item} cardNumber={i} key={i} />
    ))
  )}
</div>


      <Pagination currentPage={currentPage} totalItems={totalItem}/>
    </div>
  );
}

export default App;
