import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import './App.css';
import EnterDetails from './components/inputs/EnterDetails'
import Details from './components/showDetails/Details';

const App = () => {
  const [details, setDetails] = useState([]);
  const onSubmitHandler = (event, formData) => {
    event.preventDefault();
    setDetails((prevState) => {
      return [
        ...prevState,
        formData
      ]
    })
  }
  return (
<Container className="align-container">
  <EnterDetails onSubmit = {onSubmitHandler}/>
  <Details details={details}/>
</Container>
  )
}

export default App;