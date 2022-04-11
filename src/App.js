import { Route } from 'react-router-dom';
import './scss/style.scss';

//common 컴포넌트
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main 컴포넌트
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub 컴포넌트
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';

function App() {
	return (
		<>
			<Header />

			{/* exact를 붙여서 메인 페이지에서만 보이게 하기 */}
			<Route exact path='/'>
				<Visual />
				<Content />
			</Route>

			{/* youtube 서브페이지에서만 보이게 하기 */}
			<Route path='/youtube' component={Youtube} />

			{/* gallery 서브페이지에서만 보이게 하기 */}
			<Route path='/gallery' component={Gallery} />

			<Footer />
		</>
	);
}

export default App;

/*
<Route path='/gallery'> 
	<Gallery />
</Route>

= <Route path='/gallery' component={Gallery} />
*/
