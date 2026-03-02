
import { render, screen } from '@testing-library/react';
import App from './../App';
import * as productAPI from './../productAPI';

jest.mock('./../productAPI');

test("test the API function with mock", async ()=> {
   productAPI.API.mockResolvedValue({
    "name": "Muskan", 
    "age": 21
   });
   render(<App />);
   const nameElement = await screen.findByText(/Name: Muskan/i);
   const ageElement = await screen.findByText(/Age: 21/i);
   expect(nameElement).toBeInTheDocument();
   expect(ageElement).toBeInTheDocument();
})
