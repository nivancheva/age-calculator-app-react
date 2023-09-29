import './App.css';
import iconArrow from './images/icon-arrow.svg';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='age-input-wrapper'>
          <div className='age-input'>
            <label htmlFor='day'>Day</label>
            <input
              id='day'
              name='day'
              type='number'
              placeholder='DD'
            />
          </div>
          <div className='age-input'>
            <label htmlFor='month'>Month</label>
              <input
                id='month'
                name='month'
                type='number'
                placeholder='MM'
              />
          </div>
          <div className='age-input'>
            <label htmlFor='year'>Year</label>
              <input
                id='year'
                name='year'
                type='number'
                placeholder='YYYY'
              />
          </div>
        </div>

        <div className='button-wrapper'><button className='button'><img src={iconArrow}/></button></div>

        <div className='age-calculator'>
          <p><span>{}</span> years</p>
          <p><span>3</span> months</p>
          <p><span>26</span> days</p>
        </div>
      </div>
    </div>
  );
}

export default App;
