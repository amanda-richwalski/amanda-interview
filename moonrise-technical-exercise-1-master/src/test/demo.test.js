import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
configure({ adapter: new Adapter() });


it("adds correctly", () => {
    expect(1+1).toEqual(2);
 });


 it("renders correctly", () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });




page = <MyCoolPage />;
pageMounted = mount(page);

const button = pageMounted.find('#some_button');
expect(button.length).toBe(1); // it finds it alright
button.simulate('click'); // nothing happens