import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/quotes?category=success',
        {
          headers: {
            'X-Api-Key': 'ci0kuRqNf4wrnzdHHoKo0A==f4vArDcXfwzIpCFB',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)
      const { quote, author } = response.data[0];
      setQuote(quote);
      setAuthor(author);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleSubmit = () => {
    fetchQuote();
  };

  return (
    <Container>
      <div className="section">
        <div className="quote">
          <h3>"{quote}"</h3>
        </div>
        <div className="author">
          <h5>{author}</h5>
        </div>
        <Button className="justify-content-end d-flex" onClick={handleSubmit}>
          Next Quote
        </Button>
      </div>
    </Container>
  );
};

export default Quotes;
