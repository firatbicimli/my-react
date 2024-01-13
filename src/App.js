import './style.scss';

function App() {
  return (
    <div className="App">
      <h3>A collective list of free APIs for use in <br/> software and web development.</h3>
      <form>
        <input type='text' placeholder='Find development, games, images APIs'/>
      </form>
      <div className='container'>
        <h4>Featured APIs of this week</h4>
        <div className='api-list'>
          <div className='api-item'>
            <div className='item-icon'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
