import  React, {Component} from 'react';
import {render} from 'react-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Container,
    Nav,
    DropdownToggle,
    DropdowpnMenu,
    DropdownItem,
} from 'reactstrap';

class AppNavbar extends Component
{
    state = {};

    toggle = () =>{
        this.setState =  ({
            isOpen : !this.state.isOpen
        });
    };

    dropToggle = () =>{
        this.setState =  ({
            dropOpen : !this.state.dropOpen
        });
    };

    render()
    {
        return(
        <div>
            <Navbar color = "dark" dark expand ="sm" className="mb-5">
                <Container>
                    <NavbarBrand href = "/"> Shopping List</NavbarBrand>
                    <NavbarToggler onClick = {this.toggle}/>
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                                <NavLink href = "https://github.com/jason-may-97"> Github </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href = "https://github.com/jason-may-97"> GiFthub </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                        <NavDropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={this.dropDownToggle}
                        >
                            <DropdownToggle nav caret>
                            Name or Email
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>My Profile</DropdownItem>
                            </DropdownMenu>
                        </NavDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }


}

export default AppNavbar;