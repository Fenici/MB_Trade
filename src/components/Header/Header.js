import React, {Component} from 'react';
import {
    Badge,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    NavbarBrand,
    InputGroup,
    InputGroupButton,
    Button,
    Input,
    DropdownToggle
} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    sidebarMinimize(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-minimized');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    asideToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    }

    render() {
        return (
            <header className="app-header navbar">
              <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
              <NavbarBrand href="#"></NavbarBrand>
              <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
              <Nav className="d-md-down-none" navbar>
                <NavItem className="px-3">
                  <NavLink href="#">Dashboard</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink href="#">Users</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink href="#">Settings</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>

                      <InputGroup>
                          <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search"/>
                          <InputGroupButton>
                          <Button color="primary"><i className="fa fa-search"></i> </Button>
                        </InputGroupButton>
                      </InputGroup>

                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="nav-link ">
                      <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                      {/*<span className="d-md-down-none">Trader</span>*/}
                    </DropdownToggle>
                    <DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
                      <DropdownItem header tag="div" className="text-center"><strong>Welcome!</strong></DropdownItem>
                      <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                      <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                      <DropdownItem><i className="fa fa-usd"></i> My Trades<Badge color="secondary">42</Badge></DropdownItem>
                      <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
                      <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem className="d-md-down-none">
                  <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
                </NavItem>
                <NavItem className="d-md-down-none">
                  <NavLink href="#" ><i className="fa fa-gear"></i></NavLink>
                </NavItem>
              </Nav>

              {/*<NavbarToggler className="d-md-down-none" type="button" onClick={this.asideToggle}>&#9776;</NavbarToggler>*/}
            </header>
        )
    }
}

export default Header;
