import React, { Component } from 'react';
import Filters from './filters';
import {SideNav, Button, SideNavItem} from 'react-materialize';

class NavBar extends Component {
	render() {
		return (
			<div className='top-nav'>
				<ul>
                    <SideNav
						trigger = {<Button>Filters</Button>}
						options={{closeOnClick:true}}
					>
						<SideNavItem>
							<Filters />
						</SideNavItem>
					</SideNav>
                    <li>Title/Location</li>
                    <li> 4 out of 100 Jobs Found</li>
                    <li>Saved</li>
                </ul>
			</div>
		);
	}
}

export default NavBar;


{/* <SideNav
  trigger={<Button>SIDE NAV DEMO</Button>}
  options={{ closeOnClick: true }}
  >
  <SideNavItem userView
    user={{
      background: 'img/office.jpg',
      image: 'img/yuna.jpg',
      name: 'John Doe',
      email: 'jdandturk@gmail.com'
    }}
  />
  <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
  <SideNavItem href='#!second'>Second Link</SideNavItem>
  <SideNavItem divider />
  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav> */}
