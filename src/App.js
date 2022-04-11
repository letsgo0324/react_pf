import { Route, Switch } from 'react-router-dom';
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
			{/* 중첩될 경우 하나만 보이고 싶을 때, Switch로 묶어주기 */}
			{/* Switch 같은 경로의 router 연결시 구체적인 router 하나만 적용 */}
			<Switch>
				{/* exact를 붙여서 메인 페이지에서만 보이게 하기 */}
				<Route exact path='/'>
					{/* 메인에만 적용되는 header */}
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					{/* 서브에만 적용되는 header */}
					<Header type={'sub'} />
				</Route>
			</Switch>

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
