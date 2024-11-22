import './css1/style.css';
import News from './News';
import Right from './Right';
import Appcon from './Appcon';
import data from './data';

function App() {
	
	return (
		<>
			<div className="bottomcon">
				<div className="bottomcon_inner">
					<News propsValue={data.news} />
					<Right propsValue={data.category} />
				</div>
			</div>
			<div className="appcon">
				<Appcon propsValue={data.banner} />
			</div>
		</>
	);
}	

export default App;