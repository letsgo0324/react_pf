import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = { color: 'aqua' };

	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' activeStyle={active}>
						LOGO
					</NavLink>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
				</ul>

				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;

/*
	- 라우터에서는 a태그 쓰면 X
	a태그 대신 NavLink를 import하고 <NavLink> 안에 링크넣기
	<NavLink exact to='/'>는 해당 주소로만 이동 
	<NavLink to='/링크주소'>

	- 활성화시 색깔 변경
	const로 변수 설정
	NavLink에 activeStyle={변수명} 입력
*/
