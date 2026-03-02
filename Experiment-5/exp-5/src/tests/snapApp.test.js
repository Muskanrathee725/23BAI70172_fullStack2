import { render} from '@testing-library/react';
import Component from "./../component";


test("Snap testing", ()=>{ 
    const data = render(<Component data = "test"/>);
    expect(data).toMatchSnapshot();

})