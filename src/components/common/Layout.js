import React, { useEffect, useRef } from 'react';

//비구조할당으로 children props으로 해당 컴포넌트로 감싼 자식 컨텐츠를 통으로 불러올 수 있음
function Layout(props) {
	//비구조할당인 ({name, children})으로도 쓰고 props 붙은 부분 삭제할 수 있음
	//console.log(props);
	//처음 시작시 서서히 올라오는 화면을 한번만 실행하기
	const frame = useRef(null);
	useEffect(() => {
		//console.log('레이아웃 컴포넌트 생성');
		frame.current.classList.add('on');

		return () => {
			//console.log('레이아웃 컴포넌트 소멸');
		};
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure></figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				{/* 전달된 값을 원하는 위치에 저장 */}
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
