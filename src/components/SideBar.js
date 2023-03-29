import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillMail, AiOutlineInfoCircle, AiFillTag, AiOutlineSearch } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';


export default function SideBar() {
    return (
        <SidebarContainer>
            <Logo>Itinerary AI</Logo>
                <Link to="/country" >
                    <BsFlag/>
                    <SidebarItem>Countries</SidebarItem>
                </Link>
                <Link to="/tags" >
                    <AiFillTag/>
                    <SidebarItem>Tags</SidebarItem>
                </Link>
                <Link to="/ai" >
                    <AiOutlineSearch/>
                    <SidebarItem>Ai generate</SidebarItem>
                </Link>
                <Link to="/about-us" >
                    <AiOutlineInfoCircle/>
                    <SidebarItem>About us</SidebarItem>
                </Link>
                <Link to="/mail" >
                    <AiFillMail/>
                    <SidebarItem>Email</SidebarItem>
                </Link>

        </SidebarContainer>
    )
}


const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:fixed;
  background-color: #f5f5f5;
  > a {
    display: flex ; 
    flex: 0 ;
  }

  @media only screen and (max-width: 768px) { /* styles for tablet screens */
    bottom: 0;
    top: auto;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    > a {
        display: flex ; 
        flex: 1 ;
    }    
  }

  @media only screen and (max-width: 480px) { /* styles for mobile screens */
    bottom: 0;
    top: auto;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    > a {
        display: flex ; 
        flex: 1 ;
    }    
  }
`;

const SidebarItem = styled.div`
  display: block;
  padding: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #444;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e5e5e5;
    color: #222;
  }

  @media only screen and (max-width: 768px) { /* styles for tablet screens */
    margin: 0;
    padding: 0;
    display: none;
  }

  @media only screen and (max-width: 480px) { /* styles for mobile screens */
    margin: 0;
    padding: 0;
    display: none;
  }
`;

const Logo = styled.h3`
    display: block;
    @media only screen and (max-width: 768px) { /* styles for tablet screens */
        display: none;
    }

    @media only screen and (max-width: 480px) { /* styles for mobile screens */
        display: none;
    }
`;